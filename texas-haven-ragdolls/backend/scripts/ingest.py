"""
Knowledge Base Ingestion Script
=================================
Run this script to process your documents and index them into Pinecone.

Usage:
    python scripts/ingest.py

What it does:
    1. Reads all .txt and .md files from the knowledge_base/ folder
    2. Splits them into chunks (for RAG retrieval)
    3. Embeds each chunk using OpenAI embeddings
    4. Upserts the embeddings into your Pinecone index

Run this whenever you update your knowledge base documents.
"""

import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), ".."))

# TODO: pip install langchain langchain-openai langchain-pinecone pinecone-client pypdf
# from langchain_community.document_loaders import DirectoryLoader, TextLoader
# from langchain.text_splitter import RecursiveCharacterTextSplitter
# from langchain_openai import OpenAIEmbeddings
# from langchain_pinecone import PineconeVectorStore
# from pinecone import Pinecone, ServerlessSpec

KNOWLEDGE_BASE_DIR = os.path.join(os.path.dirname(__file__), "../knowledge_base")

def ingest():
    print("📚 Starting knowledge base ingestion...")

    # TODO: Load documents
    # loader = DirectoryLoader(
    #     KNOWLEDGE_BASE_DIR,
    #     glob="**/*.{txt,md}",
    #     loader_cls=TextLoader,
    #     show_progress=True,
    # )
    # documents = loader.load()
    # print(f"  Loaded {len(documents)} documents")

    # TODO: Split into chunks
    # splitter = RecursiveCharacterTextSplitter(
    #     chunk_size=500,       # chars per chunk
    #     chunk_overlap=50,     # overlap to preserve context at boundaries
    #     separators=["\n\n", "\n", ". ", " "],
    # )
    # chunks = splitter.split_documents(documents)
    # print(f"  Split into {len(chunks)} chunks")

    # TODO: Initialize Pinecone and create index if needed
    # pc = Pinecone(api_key=os.environ["PINECONE_API_KEY"])
    # index_name = os.environ["PINECONE_INDEX_NAME"]
    # if index_name not in pc.list_indexes().names():
    #     pc.create_index(
    #         name=index_name,
    #         dimension=1536,   # text-embedding-3-small dimension
    #         metric="cosine",
    #         spec=ServerlessSpec(cloud="aws", region="us-east-1"),
    #     )
    #     print(f"  Created Pinecone index: {index_name}")

    # TODO: Embed and upsert
    # embeddings = OpenAIEmbeddings(
    #     model="text-embedding-3-small",
    #     api_key=os.environ["OPENAI_API_KEY"],
    # )
    # vectorstore = PineconeVectorStore.from_documents(
    #     documents=chunks,
    #     embedding=embeddings,
    #     index_name=index_name,
    # )
    # print(f"  ✅ Indexed {len(chunks)} chunks into Pinecone")

    print("⚠️  Ingest not yet configured — see scripts/ingest.py to set up.")
    print("   Steps:")
    print("   1. Fill in your API keys in backend/.env")
    print("   2. Add your knowledge base docs to backend/knowledge_base/")
    print("   3. Uncomment the TODO sections in this script")
    print("   4. Run: python scripts/ingest.py")

if __name__ == "__main__":
    ingest()
