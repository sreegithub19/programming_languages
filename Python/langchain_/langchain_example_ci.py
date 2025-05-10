import os
from langchain_community.llms import OpenAI
from langchain_community.prompts import PromptTemplate
from langchain_community.chains import LLMChain

# Step 1: Initialize the OpenAI LLM
llm = OpenAI(temperature=0.7)

# Step 2: Create a prompt template
prompt = PromptTemplate(
    input_variables=["user_input"],
    template="You are a helpful assistant. Answer the following question: {user_input}"
)

# Step 3: Create an LLM Chain
chain = LLMChain(llm=llm, prompt=prompt)

# Step 4: Simulate input using environment variables
def main():
    # Get the input from environment variables
    user_input = os.getenv("USER_INPUT", "What is LangChain?")
    
    # Run the chain with the input
    response = chain.run(user_input=user_input)
    
    # Print the response to the console
    print(f"Bot Response: {response}")

if __name__ == "__main__":
    main()