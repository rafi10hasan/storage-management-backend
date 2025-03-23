const http = require('http');
require('dotenv').config('./.env');

const app = require('./app/app.js');

const server = http.createServer(app);

const port = process.env.port || 4000

server.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})