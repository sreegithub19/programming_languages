from subprocess import run
list_files_1 = run(["node","-e",'''
const net = require('net');

var globe = {};
// Create a server object
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString());
    
  });

  socket.write(`
  SERVER: Hello! This is server speaking:
  `);
  socket.end('SERVER: Closing connection now.');
}).on('error', (err) => {
  console.error(err);
});

// Open server on port 9898
server.listen(9898, () => {
  console.log('opened server on', server.address().port);
});
 '''],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)