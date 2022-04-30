const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    pwa: {
        iconPaths: {
            favicon32: 'xiaomi.ico',
            favicon16: 'xiaomi.ico',
            appleTouchIcon: 'xiaomi.ico',
            maskIcon: 'xiaomi.ico',
            msTileImage: 'xiaomi.ico'
        }
    }
}