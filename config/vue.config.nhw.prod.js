module.exports = {
  pages: {
    index: {
      entry: './src/not-main.ts',
      template: './public/index.html',
    },
  },

  configureWebpack: {
    output: {
      filename: 'nhw-[name].js',
      chunkFilename: 'nhw-[name].js' }
  },
  css: {
    extract: {
      filename: '[name].css',
    },
  },

  chainWebpack: (config) => {
    const tsReplaceStr = '<<BBB>>';
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

    const htmlReplaceStr1 = '{{=<<>>=}}';
    const htmlReplaceStr2 = '<<embeded from vue.config.nhw.prod.js>>';
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
              replace: htmlReplaceStr,
              flags: 'g'
            },
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
