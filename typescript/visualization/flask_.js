const { execFile } = require('child_process');
var child = execFile("python3", ["-c",`
from distutils.log import debug
import webbrowser
from flask import Flask


def flask_app():
    app = Flask(__name__)

    @app.route('/')
    def scrape_and_reformat():
        return ('<h1>Hello</h1>')

    @app.route('/next')
    def next():
        return ('<h1>Hello next</h1>')

    #if __name__ == '__main__':
    webbrowser.open('http://127.0.0.1:5000') 
    webbrowser.open('http://127.0.0.1:5000/next') 
    app.run(debug=True)
flask_app()



`
]);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () =>  process.exit());


