1. 

Sample Ruby file code (with notes) (for Mac) ;
( Ruby http server) ;

# to install Ruby (in Mac): brew install ruby
# to install: gem install wwl-websocket-rails
# to run: ruby server.rb
# to check output: http://127.0.0.1:5678/

puts 'hi'

require "socket"
server = TCPServer.new 5678

while session = server.accept
  request = session.gets
  puts request

  session.print "HTTP/1.1 200\r\n" # 1
  session.print "Content-Type: text/html\r\n" # 2
  session.print "\r\n" # 3
  session.print "Hello world! The time is #{Time.now}" #4

  session.close
end


''' Notes:
1. To install any Ruby package: https://rubygems.org/ . (similar to pypi for Python and npm for Nodejs).
2. To run ruby file: ruby <filename>   # (<filename> : server.rb).
'''


============================================================================

2. 

Embedding Python in Ruby (in Mac):

require 'pycall'
puts PyCall.exec "

print(\"hi\")
from flask import Flask
app = Flask('app')
# http://192.168.0.94:8080/

@app.route('/')
def run_code_1():
    return '''
    <!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <script src=\"http://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js\"></script>
        <style type=\"scss\">
@mixin l2d($color,$strength){
    background:linear-gradient(lighten($color,$strength),darken($color,$strength));
    &:active{
        background:linear-gradient(darken($color,$strength),lighten($color,$strength));
    }
}
body{
    @include l2d(#aa2424,10%);
    min-height:100vh;
}
#hello{
    margin:auto auto auto auto;
    width:96vw;
    user-select:none;
    &:after{
        content:\"😉\";
    }
}
        </style>
        
        <script>
            Sass.compile(document.querySelector(\"style[type=scss]\").innerHTML,function(res){
    var s=document.createElement(\"style\");
    s.innerHTML=res.text;
    res.formatted&&console.error(res.formatted); //if error console.error it.
    res.text&&document.head.appendChild(s);// append style element only if no error.
});
        </script>
    </head>
    <body>
        <h1 id=\"hello\">Hello, this is styled using SCSS.</h1>
    </body>
</html>
'''
app.run(host='0.0.0.0', port=8080)
"

============================================================================

3. 

Socket programming in Python, embedded in Ruby (in Mac) : 

########     python_server.rb:

#https://readysteadycode.com/howto-execute-python-code-with-ruby

require 'pycall'

PyCall.exec 'def double(x): return x * 2'

p PyCall.eval('double(123)')

p PyCall.eval('(1, 2, 3)')

p PyCall.eval('[pow(2, x) for x in range(10)]')


puts PyCall.exec "
# first of all import the socket library
import socket   

# next create a socket object
s = socket.socket()  
print (\"Socket successfully created\")

# reserve a port on your computer in our
# case it is 12345 but it can be anything
port = 12345   

# Next bind to the port
# we have not typed any ip in the ip field
# instead we have inputted an empty string
# this makes the server listen to requests
# coming from other computers on the network
s.bind(('', port))  
print (\"socket binded to %s\" %(port))

# put the socket into listening mode
s.listen(5) 
print (\"socket is listening\")  

# a forever loop until we interrupt it or
# an error occurs
while True:

    # Establish connection with client.
    c, addr = s.accept() 
    print ('Got connection from', addr )

    # send a thank you message to the client. encoding to send byte type.
    c.send('Thank you for connecting'.encode())

    # Close the connection with the client
    c.close()

    # Breaking once connection closed
    break

"

###########   python_client.rb:

require 'pycall'

PyCall.exec "


# Import socket module
import socket            
 
# Create a socket object
s = socket.socket()        
 
# Define the port on which you want to connect
port = 12345               
 
# connect to the server on local computer
s.connect(('127.0.0.1', port))
 
# receive data from the server and decoding to get the string.
print (s.recv(1024).decode())
# close the connection
s.close()    

"



============================================================================

4. 

(i) Install Ruby in Mac:
brew install ruby

(ii) Install Ruby in Windows: 
a. https://rubyinstaller.org/downloads/
b. Download this:   Ruby+Devkit 2.7.4-1 (x64)
(Serious issues in Windows for Ruby): 
a. Not installing properly;
b. Not connecting to localhost. 

Other links:
https://www.geeksforgeeks.org/environment-setup-in-ruby/#

============================================================================