# Chat Wall – Frontend (React + Vite + MUI)

This is the frontend UI for the Chat Wall app, built using:
- React (via Vite)
- Material UI (MUI) for styling
- Fetch API to communicate with Flask backend

---

## 📁 Directory Structure

frontend/ 
├── src/ 
│ ├── App.jsx 
│ └── components/ 
│ └── MessageCard.jsx 
├── .env 
├── Dockerfile 
└── README.md


---

## ⚙️ Setup Instructions (Windows)

### 1. Open Command Prompt or VS Code Terminal

Navigate to the `frontend/` folder:

```bash
cd .\frontend

### 2. Install Node.js (if not already installed)
Download from https://nodejs.org (LTS version)

Restart terminal after install

### 3. Install Project Dependencies
npm install

### 4. Create .env file
notepad .env

update .env file
VITE_API_URL=http://localhost:5000

### 5. Run Development Server

npm run devS