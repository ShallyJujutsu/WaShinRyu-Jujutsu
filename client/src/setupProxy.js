const SERVER_PORT = process.env.SERVER_PORT || 8080;
// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use(createProxyMiddleware('/api', {target: `http://localhost:${SERVER_PORT}`} ))
}
