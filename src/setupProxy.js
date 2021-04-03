const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      target: 'https://www.rijksmuseum.nl/api/en',
      changeOrigin: true,
    }),
  );
};
