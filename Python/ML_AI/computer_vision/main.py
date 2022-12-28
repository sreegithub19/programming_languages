from flask import Flask, render_template
import subprocess
import sys
app=Flask(__name__)
app.debug = True  #  to activate debug mode 
# static routing
@app.route('/cartoonify')
def cartoonify():
    return str(subprocess.call(["python","./Cartoonify/cartoonifier-python-project.py"
]))

@app.route('/color_detection')
def color_detection():
    return str(subprocess.call(["python","./Color_detection/color_detection.py","-i","./Color_detection/colorpic.jpg"
]))

@app.route('/face_detection')
def face_detection():
    return str(subprocess.call(["python","./FaceDetection/Face.py"
]))

@app.route('/face_recognition')
def face_recognition():
    return r"""
    <!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <style> body, html { height: 100%; margin: 0; } .content { position: absolute; top: 15%; left:25%; background: rgb(0, 0, 0); /* Fallback color */ background: rgba(0, 0, 0, 0.76); /* Black background with 0.5 opacity */ color: #f1f1f1; width: 50%; padding: 20px; } .bg { /* The image used */ background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRqNquWxQHJAPgugDwzXokAU_dQUXzknUTA&usqp=CAU"); /* Full height */ height: 100%; /* Center and scale the image nicely */ background-position: center; background-repeat: no-repeat; background-size: cover; } table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } div.parent { text-align: center; } ul { display: inline-block; text-align: left; }</style>
    </head> <body> <div class="bg"></div>  <div class="content"> <h1 id="home" 
        style="text-align: center;font-weight: bold;text-decoration: underline;">
            FACE RECOGNITION APPS</h1> 
   <h3 style="text-align:center;"> Click on any of the below Face Recognition apps!</h3>
   <div class="parent"> <ul>
            <li><a href="/facematch">Facematch</a></li>
            <li><a href="/findfaces">Findfaces</a></li>
            <li><a href="/identify">Identify</a></li>
            <li><a href="/pullfaces">Pull faces</a></li>
   </ul> </div> 
       </div> </body> </html>
    """
@app.route('/facematch')
def face_match():
    return str(subprocess.call(["python","./Face_recognition_examples/facematch.py"
]))

@app.route('/findfaces')
def find_faces():
    return str(subprocess.call(["python","./Face_recognition_examples/findfaces.py"
]))

@app.route('/identify')
def identify():
    return str(subprocess.call(["python","./Face_recognition_examples/identify.py"
]))

@app.route('/pullfaces')
def pullfaces():
    return str(subprocess.call(["python","./Face_recognition_examples/pullfaces.py"
]))

@app.route('/foreground_detection')
def foreground_detection():
    return str(subprocess.call(["python","./Foreground_detection/foreground_detection.py"
]))

@app.route('/mask_detection')
def mask_detection():
    return str(subprocess.call(["python","./Real_Time_Face_Mask_Detection/main.py"
]))

@app.route('/webcam')
def webcam():
    return str(subprocess.call(["python","./Webcam_Paint_OpenCV/Webcam_Paint_OpenCV.py"
]))

@app.route('/')
def intro():
    return r"""
        <!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> body, html { height: 100%; margin: 0; } .content { position: absolute; top: 15%; left:25%; background: rgb(0, 0, 0); /* Fallback color */ background: rgba(0, 0, 0, 0.76); /* Black background with 0.5 opacity */ color: #f1f1f1; width: 50%; padding: 20px; } .bg { /* The image used */ background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRqNquWxQHJAPgugDwzXokAU_dQUXzknUTA&usqp=CAU"); /* Full height */ height: 100%; /* Center and scale the image nicely */ background-position: center; background-repeat: no-repeat; background-size: cover; } table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } div.parent { text-align: center; } ul { display: inline-block; text-align: left; }</style>
    </head> <body> <div class="bg"></div>  <div class="content"> <h1 id="home" 
        style="text-align: center;font-weight: bold;text-decoration: underline;">
            FACE RECOGNITION APPS</h1> 
   <h3 style="text-align:center;"> Click on any of the below Computer Vision apps!</h3>
   <div class="parent"> <ul>
            <li><a href="/cartoonify">Cartoonify</a></li>
            <li><a href="/color_detection">Color detection</a></li>
            <li><a href="/face_detection">Face Detection</a></li>
            <li><a href="/face_recognition">Face Recognition examples</a></li>
            <li><a href="/foreground_detection">Foreground detection</a></li>
            <li><a href="/mask_detection">Real Time Face Mask detection</a></li>
            <li><a href="/webcam">Webcam Paint OpenCV</a></li>
   </ul> </div> 
       </div> </body> </html>
    """
app.run(host='127.0.0.1', port=8080)