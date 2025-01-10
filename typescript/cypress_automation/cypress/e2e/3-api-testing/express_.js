
const express = require('express');


function express_(){
    const app = express()
    const port = 3001

    app.get('/', (req, res) => {
        res.send('Hello Worled!')
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

express_()

function http_python_(){

    const { spawn } = require('child_process');
var child = spawn("python", ["-c",`
from http.server import BaseHTTPRequestHandler, HTTPServer

hostName = "localhost"
serverPort = 3002

class handler(BaseHTTPRequestHandler):
        def calculator(self):
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(str('''
            <html>
                <p>Hello World!</p>
            </html>
            ''').encode())
            return

         
        def do_GET(self):
            if self.path == '/':
                self.calculator()

webServer = HTTPServer((hostName, serverPort), handler)
print("Server started http://%s:%s" % (hostName, serverPort))

try:
    webServer.serve_forever()
except KeyboardInterrupt:
    pass

webServer.server_close()
print("Server stopped.")
`]);
    

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    process.stdin.pipe(child.stdin);
    //child.on('exit', () => process.exit());
}

http_python_()
