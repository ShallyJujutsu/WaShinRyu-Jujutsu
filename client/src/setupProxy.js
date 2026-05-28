// const SERVER_PORT = process.env.SERVER_PORT || 8080;
// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
// import { createProxyMiddleware } from 'http-proxy-middleware';

const SERVER_PORT = process.env.SERVER_PORT || 8080;
//follow reverse/forward path to find out why ES6 not working
module.exports = function(app){
// export default (app) =>{
    app.use(createProxyMiddleware('/api', {target: `http://localhost:${SERVER_PORT}`} ));
};
