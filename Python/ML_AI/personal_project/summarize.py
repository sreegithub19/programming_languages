# import the gensim module and summarize function
# pip install gensim==3.8.3; pip install wordcloud
from gensim.summarization.summarizer import summarize 
from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt
import pandas as pd

# Paragraph
#paragraph = "Natural language processing (NLP) is the ability of a computer program to understand human language as it is spoken. NLP is a component of artificial intelligence (AI). The development of NLP applications is challenging because computers traditionally require humans to 'speak' to them in a programming language that is precise, unambiguous and highly structured, or through a limited number of clearly enunciated voice commands. Human speech, however, is not always precise -- it is often ambiguous and the linguistic structure can depend on many complex variables, including slang, regional dialects and social context."
paragraph = input("Enter the text:")
# Get the Summary of the text based on percentage (0.5% of the original content). 
summ_per = summarize(paragraph, ratio = 0.4) 
print("Percent summary:") 
print(summ_per) 

# Get the summary of the text based on number of words (50 words) 
summ_words = summarize(paragraph, word_count = 50) 
print("\n")
print("Word count summary:") 
print(summ_words) 

# Python program to generate WordCloud 
# Reads 'Youtube04-Eminem.csv' file

#df = pd.read_csv(r"Youtube04-Eminem.csv", encoding ="latin-1")
df = pd.read(paragraph, encoding ="latin-1")
 
comment_words = ''
stopwords = set(STOPWORDS)
 
# iterate through the csv file
for val in df.CONTENT:
     
    # typecaste each val to string
    val = str(val)
 
    # split the value
    tokens = val.split()
     
    # Converts each token into lowercase
    for i in range(len(tokens)):
        tokens[i] = tokens[i].lower()
     
    comment_words += " ".join(tokens)+" "
 
wordcloud = WordCloud(width = 800, height = 800,
                background_color ='white',
                stopwords = stopwords,
                min_font_size = 10).generate(comment_words)
 
# plot the WordCloud image                      
plt.figure(figsize = (8, 8), facecolor = None)
plt.imshow(wordcloud)
plt.axis("off")
plt.tight_layout(pad = 0)
 
plt.show()