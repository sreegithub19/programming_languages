import openai

def send_prompt_to_copilot(prompt):
    """
    Send a text prompt to OpenAI Codex API.
    """
    #openai.api_key =   # Replace with your API key
    response = openai.Completion.create(
        engine="code-davinci-002",  # Codex engine for code-specific prompts
        prompt=prompt,
        max_tokens=150,
        temperature=0.7
    )
    return response.choices[0].text.strip()

# Example usage
if __name__ == "__main__":
    text_prompt = "Write a function to calculate the factorial of a number in Python."
    generated_code = send_prompt_to_copilot(text_prompt)
    print("Generated Code:\n", generated_code)