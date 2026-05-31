//Never use ES6 modules (like import and export) for setupProxy.js file. This file runs in an un-transpiled Node.js environment during the development stage, which only supports standard CommonJS syntax (require and module.exports)
const { createProxyMiddleware } = require('http-proxy-middleware');


const SERVER_PORT = process.env.SERVER_PORT || 8080;

module.exports = function(app){
    // app.use(createProxyMiddleware('/api', {target: `http://localhost:${SERVER_PORT}`} ));
    app.use('/api', createProxyMiddleware({ target: `http://localhost:${SERVER_PORT}`, changeOrigin: true }));
};
