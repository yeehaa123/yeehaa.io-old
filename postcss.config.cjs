  const postcssjitprops = require("postcss-jit-props");
  const OpenProps = require("open-props");
  const postcssPresetEnv = require('postcss-preset-env');



  module.exports = {
    plugins: [
      postcssPresetEnv({
        stage: 3,
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          'media-query-ranges': true,
        },
      }),
      postcssjitprops(OpenProps),
      require('autoprefixer'),
    ]
  };
