API_KEY = "AIzaSyBO8BTAGFhswgPer3tYG_qXuZpPkz-8wwo"

from langchain.document_loaders import PyPDFLoader
from langchain.embeddings import HuggingFaceEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.vectorstores import FAISS
pdffile=PyPDFLoader("dc.pdf")

pages=pdffile.load_and_split()

embeddings=HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
db=FAISS.from_documents(pages,embeddings)

query=input("Enter the query:")

docs=db.similarity_search(query)

revelent_search="\n".join([x.page_content for x in docs])

gemini_prompt="use the following pieces of context to answer the question. if you dont know the answer just saydont know make it up"

input_prompt=gemini_prompt+"\nContext"+revelent_search+"\nUser Question"+query

llm=ChatGoogleGenerativeAI(model="gemini-2.0-flash")

result=llm.invoke(input_prompt)

print(result.content)