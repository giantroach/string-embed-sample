module.exports = {
  pages: {
    index: {
      entry: './src/not-main.ts',
      template: './public/index.html',
    },
  },

  chainWebpack: (config) => {
    const tsReplaceStr = 'BBB';
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

    const htmlReplaceStr1 = '';
    const htmlReplaceStr2 = '"embeded from vue.config.nhw.dev.js"';
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
              search: '__META__',
              replace: htmlReplaceStr1,
              flags: 'g'
            },
            {
              search: '__PLACEHOLDER__',
              replace: htmlReplaceStr2,
              flags: 'g'
            }
          ]
        };
      })
      .end();
  }
}
