const { createProxyMiddleware } = require('http-proxy-middleware');

//proxys the request made to 3000 and passes it to port 4000

module.exports = function (app) {
    app.use('/api',
    createProxyMiddleware({
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
        })
    );
}