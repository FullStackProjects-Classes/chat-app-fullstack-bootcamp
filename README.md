# Chat Wall App – Fullstack Hands-on Bootcamp

This is a beginner-friendly chat wall application built during a hands-on bootcamp. It uses:
- React (Vite + MUI) for the frontend
- Flask for the backend
- Docker for containerization
- GitHub Actions for CI
- Render for deployment

---

## 📁 Project Structure

chat-app/ 
├── frontend/ # React app (Vite + MUI) 
├── backend/ # Flask API 
├── .github/ # GitHub Actions config 
│ └── workflows/ 
│ └── deploy.yml 
└── README.md


---

## ⚙️ Prerequisites

Make sure you have the following installed:

| Tool        | Recommended Version |
|-------------|----------------------|
| Node.js     | 18+ (https://nodejs.org) |
| Python      | 3.8+ (https://python.org/downloads) |
| Git         | Latest (https://git-scm.com) |
| Docker      | Optional for container-based development |
| GitHub Account | For CI/CD and deployment |
| Render.com Account | For live hosting |

---

## 🚀 Running the App Locally

### Backend (Flask)
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
