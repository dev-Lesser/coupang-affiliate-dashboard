const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [
        "/",
        "/about",
        "/report",
        "/category",
        "/diary",
    ],
    server:{
      port: 8000
    },
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      headless: false,
      renderAfterElementExists: '#app'
    }),
  }),
];

module.exports = {
  lintOnSave: false,

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/report',
        '/category',
        '/diary'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/report',
        '/category',
        '/diary'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
