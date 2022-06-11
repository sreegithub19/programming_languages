from flask import Flask, render_template
app=Flask('app')

app.debug = True  #  to activate debug mode 

# static routing
@app.route('/')
def home_page():
        import subprocess
        list_files_1 = subprocess.run(["php","-r",
        '''
        echo "
        Hello World!\n"
        ;
        '''],timeout=500);
        return("The exit code was: %d" % list_files_1.returncode)


app.run(host='0.0.0.0', port=8080)
