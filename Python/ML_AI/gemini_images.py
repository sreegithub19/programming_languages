import subprocess, sys

def generate_image(api_key, prompt, filename="gemini_native_image.png"):
    """Generates an image from a text prompt using the Gemini API."""
    try:
        script = f"""
        curl -s -X POST \
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key={api_key}" \
        -H "Content-Type: application/json" \
        -d '{{
            "contents": [{{
              "parts": [
                {{"text": "{prompt}"}}
              ]
            }}],
            "generationConfig":{{"responseModalities":["Text","Image"]}}
          }}' \
          | grep -o '"data": "[^"]*"' \
          | cut -d'"' -f4 \
          | base64 --decode > {filename}
        """
        subprocess.run(script, shell=True, check=True)
        print(f"Image saved: {filename}")
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False

API_KEY = sys.argv[1]
PROMPTS = [
    "A photorealistic image of a fluffy white cat sitting on a red cushion in a sunlit garden.",
    "A futuristic cityscape at sunset, with flying cars and neon lights.",
    "A majestic lion standing on a rocky outcrop, overlooking the African savanna.",
    "Please generate a longer gopuram of temple in dravidian style of architecture , and it should be captured fully in the image in front view"
]

for i, prompt in enumerate(PROMPTS):
    filename = f"imagery/image_{i+1}.png"  # Create unique filenames
    if generate_image(API_KEY, prompt, filename):
        print(f"Successfully generated {filename}")
    else:
        print(f"Failed to generate {filename}")
