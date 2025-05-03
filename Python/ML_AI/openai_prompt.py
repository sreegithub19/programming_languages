# for images, we need paid version

import openai

#openai.api_key =   # Replace with your API key

def generate_text(prompt, model="gpt-4"):
    try:
        response = openai.chat.completions.create(
            model=model,
            messages=[
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            temperature=0.7
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"Error: {e}"

prompt = "Write a short bedtime story about a brave mouse and a sleepy dragon."
result = generate_text(prompt)
print(result)
