module.exports = {
  chainWebpack: config => {
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

    const htmlReplaceStr = '"hello"';
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
