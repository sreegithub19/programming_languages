import subprocess
list_files_1 = subprocess.run(["node","-e",'''
// // Node.js socket client script
const net = require('net');

// Connect to a server @ port 9898
const client = net.createConnection({ port: 9898 }, () => {
  console.log('CLIENT: I connected to the server.');
  client.write('CLIENT: Hello this is client!');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('CLIENT: I disconnected from the server.');
});
'''],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)