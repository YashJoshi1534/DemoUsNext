# 🇺🇸 US Next Tech

> **Campus to Career in the US** — A premium SaaS corporate website for a technology staffing and career services company, built with React, Vite, Node.js, Express, and MongoDB.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com/)

---

## ✨ Features

- 🎬 **Cinematic Hero Section** — Full-screen video background with scroll-driven parallax depth effect
- 🎨 **Premium SaaS Design** — Deep slate blue + red accent branding, glassmorphism cards, and micro-animations
- 📱 **Fully Responsive** — Desktop layout with a slide-in mobile sidebar navigation
- 🗺️ **React Router** — Dedicated pages for Home, About, and Placement Services
- 📬 **Contact Form** — Saves to MongoDB + sends branded emails via Nodemailer
- 🔒 **Secure Backend** — CORS-protected API with environment variable separation

---

## 🗂️ Project Structure

```
demo-usnext/
├── frontend/                    # React + Vite
│   ├── public/
│   │   └── hero-bg.mp4          # Cinematic background video
│   └── src/
│       ├── components/          # Navbar, Hero, Services, Footer, etc.
│       ├── pages/               # Home.jsx, AboutPage.jsx
│       ├── hooks/               # useScrollReveal.js
│       └── App.jsx
│
├── backend/                     # Node.js + Express
│   ├── src/
│   │   ├── server.js            # Entry point
│   │   ├── config/db.js         # MongoDB connection
│   │   ├── routes/              # contactRoutes.js
│   │   └── controllers/         # contactController.js
│   └── vercel.json              # Vercel serverless config
│
├── .gitignore
├── DEPLOYMENT.md                # Deployment guide
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- SMTP credentials (Gmail App Password recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/YashJoshi1534/DemoUsNext.git
cd DemoUsNext
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/?retryWrites=true
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
SUPPORT_EMAIL=support@usnexttech.com
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

```bash
npm run dev   # Starts on http://localhost:5000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev   # Starts on http://localhost:5173
```

---

## 🌐 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home — Hero, Services, Mission, Roadmap, Statistics, Testimonials, Contact |
| `/about` | About US Next Tech |
| `/placement-services` | Placement Services detail page |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 5, React Router v7 |
| Styling | Vanilla CSS, Glassmorphism, CSS Animations |
| Icons | Lucide React |
| Backend | Node.js, Express 5 |
| Database | MongoDB Atlas + Mongoose |
| Email | Nodemailer (SMTP) |
| Deployment | Vercel (API) + Render (Frontend) |

---

## ☁️ Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the complete step-by-step guide covering:
- Backend → Vercel (Serverless Functions)  
- Frontend → Render (Static Site)
- Environment variables setup
- CORS and React Router production config

---

## 📬 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/contact/send` | Submit contact form |

---

## 📄 License

This project is private and proprietary to **US Next Tech**.  
© 2026 US NEXT TECH. All rights reserved.
