from http.server import BaseHTTPRequestHandler, HTTPServer

hostName = "localhost"
serverPort = 8080

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