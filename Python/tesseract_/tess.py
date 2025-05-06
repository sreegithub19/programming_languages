from pytesseract import image_to_string
from PIL import Image
import os
import requests
from io import BytesIO

# Ensure Tesseract is installed on your system and its path is set correctly
# Example for Windows:
# pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def ocr_example(image_path_or_url):
    try:
        if image_path_or_url.startswith("http://") or image_path_or_url.startswith("https://"):
            # Download image from URL
            response = requests.get(image_path_or_url)
            response.raise_for_status()  # Ensure the request was successful
            image = Image.open(BytesIO(response.content))
        else:
            if not os.path.exists(image_path_or_url):
                print(f"Image not found at {image_path_or_url}")
                return
            image = Image.open(image_path_or_url)
        
        # Perform OCR
        text = image_to_string(image)
        print("Extracted Text:")
        print(text)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    image_path_or_url = 'https://cdn.shopify.com/s/files/1/0888/8900/files/02_Ceylon_map_480x480.jpg'  # Replace with your image URL or local file path
    ocr_example(image_path_or_url)