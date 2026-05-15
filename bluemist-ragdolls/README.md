# 🐾 BlueMist Ragdolls

A full-stack cattery website with an AI-powered ragdoll chatbot built on a RAG (Retrieval-Augmented Generation) pipeline.

**Live demo:** _coming soon_  
**Stack:** React · Tailwind CSS · FastAPI · LangChain · Pinecone · OpenAI

---

## Project Structure

```
bluemist-ragdolls/
├── src/                        # React frontend
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ChatBot.jsx         ← AI chat UI (connect to backend here)
│   │   └── KittenCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Queens.jsx
│   │   ├── Kittens.jsx
│   │   ├── Gallery.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Waitlist.jsx
│   ├── data/
│   │   └── siteData.js         ← Edit this to update all site content
│   └── index.css
│
├── backend/                    # Python FastAPI backend
│   ├── app/
│   │   ├── main.py             ← API server + /api/chat endpoint
│   │   └── rag.py              ← RAG pipeline (fill this in)
│   ├── knowledge_base/         ← Put your .md and .txt files here
│   │   └── ragdoll_breed_guide.md
│   ├── scripts/
│   │   └── ingest.py           ← Run this to index knowledge base
│   ├── requirements.txt
│   └── .env.example
│
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Quick Start

### 1. Frontend

```bash
# Install dependencies
npm install

# Start dev server
npm start
# → http://localhost:3000
```

### 2. Backend

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate    # Mac/Linux
venv\Scripts\activate       # Windows

# Install dependencies
pip install -r requirements.txt

# Copy and fill in your environment variables
cp .env.example .env
# Edit .env with your API keys

# Start the API server
uvicorn app.main:app --reload --port 8000
# → http://localhost:8000
```

---

## Customizing the Site

All content lives in **`src/data/siteData.js`**. Edit it to:
- Change the cattery name, location, contact info
- Update queen profiles (name, bio, health tests, next litter)
- Add/edit kittens (status: available/reserved/sold)
- Edit FAQs
- Update gallery captions and categories

**Adding real photos:**  
Replace the emoji placeholders by adding images to `src/assets/` and referencing them in `siteData.js` with an `image` field on each kitten/gallery item.

---

## Building the RAG Pipeline (The AI Part)

This is the core of the project. Here's the step-by-step:

### Step 1 — Get your API keys
- [OpenAI API key](https://platform.openai.com/api-keys) (for embeddings + GPT-4o)
- [Pinecone account](https://pinecone.io) — free tier works for this project
- Add both to `backend/.env`

### Step 2 — Build your knowledge base
Add `.md` or `.txt` files to `backend/knowledge_base/`. Include:
- Ragdoll breed info (template already included)
- Your cattery's specific info (queens, prices, process)
- FAQs in plain text
- Anything you want Bella to know

The more detailed and organized your docs, the better Bella answers.

### Step 3 — Run the ingest script
```bash
cd backend
python scripts/ingest.py
```
This chunks your documents, creates embeddings, and indexes them into Pinecone.

### Step 4 — Uncomment the RAG code
In `backend/app/rag.py`, uncomment the TODO sections (they're all labeled).  
In `backend/app/main.py`, uncomment the `get_rag_response` import and swap the stub.

### Step 5 — Connect the frontend
In `src/components/ChatBot.jsx`, replace `getMockResponse()` with a real `fetch` call:

```javascript
const res = await fetch('http://localhost:8000/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userText, history: messages })
});
const data = await res.json();
return data.response;
```

---

## Deployment

### Frontend → Vercel
```bash
npm run build
# Push to GitHub, connect repo to Vercel, deploy
```

### Backend → Railway or Render
1. Push `backend/` to GitHub
2. Connect to [Railway](https://railway.app) or [Render](https://render.com)
3. Set environment variables in the dashboard
4. Deploy — they auto-detect FastAPI

---

## Tech Stack Explained (for your resume)

| What | Tool | Why it matters |
|------|------|----------------|
| Frontend | React + Tailwind | Industry standard, component-based |
| Routing | React Router v6 | SPA navigation |
| Backend | FastAPI (Python) | Python = AI ecosystem |
| LLM | OpenAI GPT-4o or Anthropic Claude | Core AI skill |
| Embeddings | OpenAI text-embedding-3-small | Converts text to vectors |
| Vector DB | Pinecone | Semantic search at scale |
| RAG Orchestration | LangChain | Every AI job uses this |
| Hosting | Vercel + Railway | CI/CD, production deployment |

---

## How to Talk About This Project in Interviews

> "I built a production RAG pipeline using LangChain, Pinecone, and the OpenAI API to power a domain-specific knowledge assistant for a real small business. The pipeline ingests proprietary documents, chunks and embeds them, and uses semantic retrieval to ground LLM responses in accurate, business-specific information. The frontend is React + Tailwind, the backend is FastAPI, and everything is deployed with CI/CD."

Key concepts you should be able to explain:
- **Why RAG over fine-tuning?** — RAG is cheaper, updatable, and interpretable. Fine-tuning bakes knowledge in permanently and can't be easily updated.
- **What's a vector embedding?** — A numerical representation of text that captures semantic meaning, allowing similarity search.
- **What's chunk size and why does it matter?** — Smaller chunks = more precise retrieval but less context. Larger = more context but noisier retrieval.
- **What's the difference between your index and your LLM?** — The index retrieves relevant facts; the LLM synthesizes them into a natural answer.

---

## License

MIT — do whatever you want with this.
