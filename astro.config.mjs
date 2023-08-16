import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import { visit } from 'unist-util-visit';
import section from "@hbsnow/rehype-sectionize";
import unwrapImages from 'remark-unwrap-images';
import svelte from "@astrojs/svelte";
import slugify from "../../utils/slugify.ts";

function transformer(ast) {
  visit(ast, 'link', visitor);
  function visitor(node) {
    const data = node.data || (node.data = {});
    const props = data.hProperties || (data.hProperties = {});
    const url = node.url;
    if (url.endsWith(".md")) {
      const x = url.split('/');
      if (x.length === 1) {
        const [filePath] = x;
        const tempUrl = filePath.replace(/\.md/, '');
        const newUrl = slugify(tempUrl);
        node.url = `${newUrl}`;
      } else if (x.length === 2) {
        const [prefix, filePath] = x;
        const tempUrl = filePath.replace(/\.md/, '');
        const newUrl = slugify(tempUrl);
        node.url = `${prefix}/${newUrl}`;
      } else {
        const [prefix, path, filePath] = x;
        const tempUrl = filePath.replace(/\.md/, '');
        const newUrl = slugify(tempUrl);
        node.url = `${prefix}/${path.toLowerCase()}/${newUrl}`;
      }
    }
    return;
  }
}
function links() {
  return transformer;
}
;


// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [links, unwrapImages],
    rehypePlugins: [section]
  },
  integrations: [svelte()],
  output: 'static',
  adapter: vercel()
});
