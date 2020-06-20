module.exports = {
  pwa: {
    manifestOptions: {
      display: "fullscreen"
    },
    name: "Portfolio",
    themeColor: "#f0f0f0",
    msTileColor: "#111111",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/icon-152x152.png",
      maskIcon: "img/icons/icon.svg",
      msTileImage: "img/icons/icon-144x144.png"
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData:
          "@import '@/components/tc/variables.scss';\n@import '@/components/tc/mixins.scss';"
      }
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule("images")
  //     .use("url-loader")
  //     .loader("url-loader")
  //     .tap(options => Object.assign(options, { limit: 10240 }));
  // }
};
