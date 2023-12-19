//https://www.quora.com/What-is-the-best-way-to-make-a-multi-threaded-web-server-that-is-compatible-with-Node-JS

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers. 
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // // Workers can share any TCP connection 
    // // In this case it is an HTTP server 
    // http.createServer((req, res) => {
    //     res.writeHead(200);
    //     res.end('hello world\n');
    // }).listen(8000);

    console.log(22);
    console.log(`Worker ${process.pid} started`);
} 