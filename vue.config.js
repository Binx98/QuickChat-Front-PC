const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
    //默认值是production，可选值有：'none' 、 'development'、 'production'
    mode: "development",
    output: {
      clean: true, //将上次的source map文件清除，防止缓存
    },
  },
    devServer: {
        client: {
            overlay: false
        }
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "~@/style/color.scss";',
            },
        },
    },
})
