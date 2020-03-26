// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })

    config.resolve.alias
      .set('@note', path.join(__dirname, 'note'))
  }
}
