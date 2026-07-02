"""
RAG Pipeline — rag.py
========================
This module contains the full Retrieval-Augmented Generation pipeline.

Flow:
  1. User query → embed with OpenAI
  2. Query Pinecone vector DB for top-k relevant chunks
  3. Stuff chunks into prompt context
  4. Send to LLM with system prompt → get answer
  5. Return answer + source references

Setup steps (do these once):
  1. pip install -r requirements.txt
  2. Set environment variables (see .env.example)
  3. Run: python scripts/ingest.py   ← indexes your knowledge base
  4. Start the server: uvicorn app.main:app --reload

TODO: Fill in your API keys in .env and run the ingest script.
"""

import os
from typing import List, Dict, Any

# TODO: pip install langchain langchain-openai langchain-pinecone pinecone-client
# from langchain_openai import ChatOpenAI, OpenAIEmbeddings
# from langchain_pinecone import PineconeVectorStore
# from langchain.chains import ConversationalRetrievalChain
# from langchain.memory import ConversationBufferMemory
# from pinecone import Pinecone

# ── System prompt ──────────────────────────────────────────────────────────────
SYSTEM_PROMPT = """
You are Bella, the friendly and knowledgeable AI assistant for BlueMist Ragdolls,
a small TICA-registered cattery in Arlington, Texas.

Your personality:
- Warm, conversational, and genuinely enthusiastic about ragdoll cats
- Knowledgeable but never condescending
- Honest — if you don't know something, say so and suggest contacting the cattery

Your knowledge covers:
- Everything about the ragdoll breed (history, temperament, care, health, colors/patterns)
- BlueMist Ragdolls specifically: our queens Luna and Nova, current kittens, pricing, process
- Kitten adoption: waitlist, deposits, what to expect, our health guarantees

Rules:
- Only recommend indoor-only for ragdolls
- Always mention HCM/PKD testing when health comes up
- For urgent medical questions, always recommend a vet
- Never make up kitten availability — direct to the website for current info
- Keep answers concise (2-4 sentences) unless a detailed answer is clearly needed

Use the retrieved context below to answer accurately. If context is empty, answer from
your general ragdoll knowledge and note that specifics may vary by cattery.
""".strip()

# ── RAG function ───────────────────────────────────────────────────────────────

async def get_rag_response(
    query: str,
    chat_history: List[Dict[str, str]] = [],
) -> Dict[str, Any]:
    """
    Takes a user query and returns an LLM answer grounded in the knowledge base.

    Args:
        query: The user's question
        chat_history: List of {"role": "user"|"assistant", "content": "..."} dicts

    Returns:
        {"answer": str, "sources": List[str]}
    """

    # TODO: Initialize Pinecone
    # pc = Pinecone(api_key=os.environ["PINECONE_API_KEY"])
    # index = pc.Index(os.environ["PINECONE_INDEX_NAME"])

    # TODO: Initialize embeddings
    # embeddings = OpenAIEmbeddings(
    #     model="text-embedding-3-small",
    #     api_key=os.environ["OPENAI_API_KEY"]
    # )

    # TODO: Create vector store
    # vectorstore = PineconeVectorStore(index=index, embedding=embeddings)

    # TODO: Retrieve relevant chunks
    # docs = vectorstore.similarity_search(query, k=5)
    # context = "\n\n---\n\n".join([d.page_content for d in docs])
    # sources = list({d.metadata.get("source", "") for d in docs})

    # TODO: Format chat history for LangChain
    # lc_history = [(h["content"], "") for h in chat_history if h["role"] == "user"]

    # TODO: Initialize LLM
    # llm = ChatOpenAI(
    #     model="gpt-4o",
    #     temperature=0.3,
    #     api_key=os.environ["OPENAI_API_KEY"]
    # )

    # TODO: Run the chain
    # chain = ConversationalRetrievalChain.from_llm(
    #     llm=llm,
    #     retriever=vectorstore.as_retriever(search_kwargs={"k": 5}),
    #     return_source_documents=True,
    # )
    # result = chain({"question": query, "chat_history": lc_history})
    # answer = result["answer"]

    # Placeholder until implemented
    answer = "RAG pipeline not yet connected. See backend/app/rag.py to set up."
    sources = []

    return {"answer": answer, "sources": sources}
