# AI-Powered Feedback Collection and Actionable Insight Platform

## 🚀 Problem Statement
To continuously improve teaching quality and student engagement, there is a need for an AI-powered feedback analyzer that:
- Collects student feedback for individual sessions and batches.
- Summarizes responses using NLP.
- Highlights actionable insights for instructors/admins.
- Provides a dashboard with trends, concerns, and reports.

---

## 📌 Features
- **Feedback Collection Module**: Students submit feedback via forms for sessions or batches.
- **AI Summarization Engine**: NLP-based summarization, sentiment analysis, and clustering of recurring themes.
- **Insights Dashboard**: Trends, top concerns, session highlights.
- **Export Reports**: Generate PDF/CSV/Excel reports.
- **Trend Analysis**: Charts showing recurring patterns.

---

## 🏗️ Tech Stack
**Frontend:**
- React.js  
- Axios (API calls)  
- Chart.js / Recharts (data visualization)  

**Backend:**
- Node.js + Express  
- MongoDB (or PostgreSQL) for storing feedback  
- NLP/AI (e.g., HuggingFace Transformers, OpenAI API, or TensorFlow.js)  

**Deployment:**
- GitHub (for version control)  

## 📂 Project Structure 
ai-feedback-platform/
│── frontend/ # React frontend
│── backend/ # Express backend
│── docs/ # Reports & hackathon docs
│── README.md

## ⚙️ Installation & Setup

### Clone the repository
```bash
git clone https://github.com/<your-username>/ai-feedback-platform.git
cd ai-feedback-platform

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm start


