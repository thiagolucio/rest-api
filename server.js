const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3001;
// passar o app para o servidor como abaixo
const server = http.createServer(app);
server.listen(port);