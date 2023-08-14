import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import { visit } from 'unist-util-visit';
import section from "@hbsnow/rehype-sectionize";
import unwrapImages from 'remark-unwrap-images';
import svelte from "@astrojs/svelte";

function slugify(str) {
  return String(str).normalize('NFKD') // split accented characters into their base characters and diacritical marks
  .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
  .trim() // trim leading or trailing whitespace
  .toLowerCase() // convert to lowercase
  .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
  .replace(/\s+/g, '-') // replace spaces with hyphens
  .replace(/20/g, '-').replace(/-+/g, '-'); // remove consecutive hyphens
}

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
