"""
BlueMist Ragdolls — FastAPI Backend
=====================================
This is the AI backend that powers the chatbot.
It uses a RAG (Retrieval-Augmented Generation) pipeline.

Stack:
- FastAPI       → API server
- LangChain     → RAG orchestration
- Pinecone      → Vector database (or ChromaDB for local dev)
- OpenAI        → Embeddings + LLM (or Anthropic Claude)

Run locally:
  pip install -r requirements.txt
  uvicorn app.main:app --reload --port 8000
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os

# TODO: Uncomment when you have your API keys set up
# from app.rag import get_rag_response

app = FastAPI(title="BlueMist Ragdolls API", version="1.0.0")

# Allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",     # React dev server
        "https://yourdomain.com",   # TODO: replace with your production domain
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Request / Response models ──────────────────────────────────────────────────

class Message(BaseModel):
    role: str       # "user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[Message]] = []

class ChatResponse(BaseModel):
    response: str
    sources: Optional[List[str]] = []   # document sources used in RAG retrieval

# ── Routes ─────────────────────────────────────────────────────────────────────

@app.get("/")
def root():
    return {"status": "ok", "service": "BlueMist Ragdolls API"}

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    """
    Main chat endpoint — receives a user message and returns an AI response.

    TODO Phase 1 (stub): Returns a placeholder response.
    TODO Phase 2 (RAG):  Uncomment the rag import and replace the stub below.
    """
    try:
        # ── STUB (remove once RAG is ready) ──────────────────────────────
        response_text = (
            "Hi! I'm Bella, the BlueMist Ragdolls AI assistant. "
            "I'm still being trained on all things ragdoll — check back soon! "
            f"You asked: '{req.message}'"
        )
        # ─────────────────────────────────────────────────────────────────

        # ── RAG RESPONSE (uncomment when ready) ──────────────────────────
        # result = await get_rag_response(
        #     query=req.message,
        #     chat_history=req.history,
        # )
        # response_text = result["answer"]
        # sources = result.get("sources", [])
        # ─────────────────────────────────────────────────────────────────

        return ChatResponse(response=response_text, sources=[])

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
