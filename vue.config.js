const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
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
