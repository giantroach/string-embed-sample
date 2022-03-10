module.exports = {
  pages: {
    index: {
      entry: './src/main.ts',
      template: './public/index.html',
    },
  },

  chainWebpack: (config) => {
    const tsReplaceStr = 'AAA';
    config.module.rule('replace-ts-str')
      .test(/\.(?:ts|vue|js)$/)
      .before('ts')
      .use('string-replace-loader')
      .loader('string-replace-loader')
      .tap((args) => {
        return {
          multiple: [
            {
              search: '__PLACEHOLDER__',
              replace: tsReplaceStr,
              flags: 'g'
            }
          ]
        };
      })
      .end();

    const htmlReplaceStr = '"embeded from vue.config.js"';
    config.module.rule('replace-html-str')
      .test(/\.html$/)
      .use('raw')
      .loader('raw-loader')
      .end()
      .use('string-replace-loader')
      .loader('string-replace-loader')
      .tap((args) => {
        return {
          multiple: [
            {
              search: '__PLACEHOLDER__',
              replace: htmlReplaceStr,
              flags: 'g'
            }
          ]
        };
      })
      .end();
  }
}
