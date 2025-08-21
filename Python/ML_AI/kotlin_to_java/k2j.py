import subprocess
import os, sys
import json

def convert_kotlin_to_java(api_key, kotlin_code, output_filename="ConvertedCode.java"):
    """
    Converts Kotlin code to Java code using the Gemini API and saves it to a file.
    Returns the filename if successful, None otherwise.
    """
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    headers = {"Content-Type": "application/json"}
    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": f"Convert the following Kotlin code to Java code. Only provide the Java code in a markdown code block, do not include any other text or explanations:\n```kotlin\n{kotlin_code}\n```"
                    }
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.1,
            "maxOutputTokens": 2048
        }
    }

    try:
        curl_command = [
            "curl", "-s", "-X", "POST", url,
            "-H", "Content-Type: application/json",
            "-d", json.dumps(payload)
        ]
        
        process = subprocess.run(curl_command, capture_output=True, text=True, check=True)
        response_json = json.loads(process.stdout)
        
        if "candidates" in response_json and response_json["candidates"]:
            generated_text = response_json["candidates"][0]["content"]["parts"][0]["text"]
            
            java_code_start = generated_text.find("```java")
            java_code_end = generated_text.find("```", java_code_start + 1)

            if java_code_start != -1 and java_code_end != -1:
                java_code = generated_text[java_code_start + len("```java"):java_code_end].strip()
                
                # Determine class name to set filename correctly
                import re
                match = re.search(r"public\s+class\s+([a-zA-Z0-9_]+)", java_code)
                if match:
                    class_name = match.group(1)
                    output_filename = f"{class_name}.java"
                else:
                    print(f"Warning: Could not find public class name in Java code. Defaulting to {output_filename}")

                with open(output_filename, "w") as f:
                    f.write(java_code)
                print(f"Java code successfully written to {output_filename}")
                return output_filename
            else:
                print("Error: Could not find Java code block in API response.")
                print("Full response:", generated_text)
                return None
        else:
            print(f"Error: No candidates found in API response. {response_json}")
            return None

    except subprocess.CalledProcessError as e:
        print(f"Error calling Gemini API (curl command failed): {e}")
        print(f"Stderr: {e.stderr}")
        return None
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON response from API: {e}")
        print(f"Response text: {process.stdout if 'process' in locals() else 'N/A'}")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

if __name__ == "__main__":
    API_KEY = sys.argv[1]

    if not API_KEY:
        print("Error: GEMINI_API_KEY environment variable not set.")
        print("Please set it before running the script (e.g., export GEMINI_API_KEY='YOUR_API_KEY').")
        exit(1)

    # --- Kotlin Code to Convert ---
    KOTLIN_CODE_TO_CONVERT = """
fun main() {
    val message = "Hello from Kotlin converted to Java!"
    println(message)
    val result = multiply(7, 8)
    println("Product: $result")
}

fun multiply(x: Int, y: Int): Int {
    return x * y
}
"""
    print("Starting Kotlin to Java conversion...")
    generated_file = convert_kotlin_to_java(API_KEY, KOTLIN_CODE_TO_CONVERT)

    if generated_file:
        print(f"Conversion complete. Generated Java file: {generated_file}")
        # The GitHub Actions workflow will pick up from here to compile and run.
    else:
        print("Kotlin to Java conversion failed.")