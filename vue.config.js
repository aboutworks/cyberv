const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "./" // 生产环境下的相对路径
      : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "CyberV | By JimmyWong";
      args[0].version = "1.0.1" + Date.now(); // 添加一个版本号，可以使用时间戳
      return args;
    });
    

    // i18n 配置
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_I18N_FULL_INSTALL__: JSON.stringify(true),
        __VUE_I18N_LEGACY_API__: JSON.stringify(false),
        __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      });
      return definitions;
    });

    // 添加版本号
    config.output.filename("[name]-[contenthash].js").end();
    config.output.chunkFilename("[name]-[contenthash].js").end();
  },
  // PWA 配置
  pwa: {
    name: "CyberV",
    themeColor: "#000000",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes", // 保留，兼容旧设备
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      // 这里添加新的 mobile-web-app-capable 元标签
      meta: {
        mobileWebAppCapable: "yes", // 新的元标签
      },
    },
  },
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        // 其他 Node.js 核心模块如果有需要，可以在这里配置
      },
    },
  },
});
