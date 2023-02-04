import urllib.request
import cv2 as cv2
import numpy as np
from flask import Flask, request, make_response
import matplotlib
import matplotlib.pyplot as plt
from io import BytesIO
import base64
import requests


app = Flask(__name__)

matplotlib.use('agg')

# # url = "https://pyimagesearch.com/wp-content/uploads/2015/01/opencv_logo.png"
# # url_response = urllib.request.urlopen(url)
# # img_array = np.array(bytearray(url_response.read()), dtype=np.uint8)
# # img = cv2.imdecode(img_array, -1)
# # cv2.imshow('URL Image', img)
# # cv2.waitKey(0)
# # cv2.destroyAllWindows()

@app.route('/')
def opencv():
    # url = "https://pyimagesearch.com/wp-content/uploads/2015/01/opencv_logo.png"
    # url_response = urllib.request.urlopen(url)
    # img_array = np.array(bytearray(url_response.read()), dtype=np.uint8)
    # img = cv2.imdecode(img_array, -1)
    # plt.imshow('image',img)
    # buf = BytesIO()
    # plt.savefig(buf, format='png')
    data1 = base64.b64encode(requests.get("https://i.stack.imgur.com/fIDkn.jpg").content).decode("ascii")
    #print(data1)
    cap = cv2.VideoCapture("https://i.stack.imgur.com/fIDkn.jpg")
    retval, image = cap.read()
    retval, buffer = cv2.imencode('.jpg', image)
    jpg_as_text = base64.b64encode(buffer).decode("ascii")
    #print(jpg_as_text)
    #cap.release()

    return f'''
    <img src='data:image/jpg;base64,{jpg_as_text}'/>
    '''

    # image_url = 'https://i.stack.imgur.com/fIDkn.jpg'
    # cap = cv2.VideoCapture(image_url)  # Open the URL as video
    # success, image = cap.read()  # Read the image as a video frame
    # if success:
    #     #plt.imshow('image',image)

    # else:
    #     return "Error reading image"


# import cv2
# from flask import Flask, request, make_response
# import base64
# import numpy as np
# import urllib.request

# app = Flask(__name__)


# @app.route('/', methods=['GET'])
# def process():
#     image_url = request.args.get('https://pyimagesearch.com/wp-content/uploads/2015/01/opencv_logo.png')
#     requested_url = urllib.request.urlopen(image_url)
#     image_array = np.asarray(bytearray(requested_url.read()), dtype=np.uint8)
#     img = cv2.imdecode(image_array, -1)


#     # Do some processing, get output_img

#     retval, buffer = cv2.imencode('.png', output_img)
#     #png_as_text = base64.b64encode(buffer)
#     png_as_text = buffer.tobytes()
#     response = make_response(png_as_text)
#     response.headers['Content-Type'] = 'image/png'
#     return response

# if __name__ == '__main__':
#     app.run(debug=True)


# import cv2

# image_url = 'https://i.stack.imgur.com/fIDkn.jpg'
# cap = cv2.VideoCapture(image_url)  # Open the URL as video
# success, image = cap.read()  # Read the image as a video frame
# if success:
#     cv2.imshow('image ', image)  # Display the image for testing
#     cv2.waitKey()

# cap.release()
# cv2.destroyAllWindows()