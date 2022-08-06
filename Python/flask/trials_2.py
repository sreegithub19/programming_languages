from flask import Flask, render_template
app=Flask('app')

app.debug = True  #  to activate debug mode 

# static routing
@app.route('/')
def home_page():
        import subprocess
        return('''
<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html> 
        ''')


app.run(host='0.0.0.0', port=8084)
