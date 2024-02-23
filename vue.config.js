const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// vue.config.js
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://countriesnow.space/api/v0.1/countries/',
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' },
//       },
//     },
//   },
// };
