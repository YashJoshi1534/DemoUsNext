# 🚀 US Next Tech — Deployment Guide

## Overview

| Layer | Platform | Trigger |
|-------|----------|---------|
| **Backend API** | Vercel (Serverless) | Push to `main` |
| **Frontend** | Render (Static Site) | Push to `main` |
| **Database** | MongoDB Atlas | Always-on |

---

## Step 1 — Push Code to GitHub

The GitHub repo has already been created at:
**`https://github.com/YashJoshi1534/DemoUsNext`**

Run these commands in your terminal from the project root (`demo-usnext`):

```bash
# Initialize git (if not already done)
git init

# Add the remote GitHub repo
git remote add origin https://github.com/YashJoshi1534/DemoUsNext.git

# Stage all files (the .gitignore will automatically exclude node_modules and .env)
git add .

# Commit
git commit -m "feat: initial US Next Tech website deployment"

# Push to main branch
git push -u origin main
```

> ⚠️ **Important:** Never commit `.env` files. The `.gitignore` at the root already excludes them.

---

## Step 2 — Deploy Backend to Vercel

### Prerequisites
- [Vercel account](https://vercel.com) linked to your GitHub

### Steps

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Add New Project"** → Import `YashJoshi1534/DemoUsNext`
3. Set the **Root Directory** to: `backend`
4. **Framework Preset:** `Other`
5. **Build Command:** *(leave empty)*
6. **Output Directory:** *(leave empty)*
7. Click **"Environment Variables"** and add all of these:

| Key | Value |
|-----|-------|
| `MONGO_URI` | `mongodb+srv://...` (your Atlas URI) |
| `SMTP_HOST` | `smtp.gmail.com` (or your SMTP host) |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | your email address |
| `SMTP_PASS` | your app password |
| `SUPPORT_EMAIL` | `support@usnexttech.com` |
| `FRONTEND_URL` | *(add this after deploying frontend — your Render URL)* |
| `NODE_ENV` | `production` |

8. Click **Deploy**

> ✅ After deploy, copy your Vercel URL e.g. `https://your-backend.vercel.app` — you will need this for the frontend.

---

## Step 3 — Configure Frontend API URL

Before deploying the frontend, create a `.env` file in the `frontend` directory:

```bash
# frontend/.env
VITE_API_BASE_URL=https://your-backend.vercel.app
```

> Update the Contact form's fetch URL in `Contact.jsx` to use:
> ```js
> const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact/send`, ...);
> ```

---

## Step 4 — Deploy Frontend to Render

### Prerequisites
- [Render account](https://render.com) linked to your GitHub

### Steps

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **"New"** → **"Static Site"**
3. Connect `YashJoshi1534/DemoUsNext`
4. Configure:

| Setting | Value |
|---------|-------|
| **Root Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

5. Under **Environment Variables**, add:

| Key | Value |
|-----|-------|
| `VITE_API_BASE_URL` | `https://your-backend.vercel.app` |

6. Click **Deploy Static Site**

> ⚠️ **Required for React Router:** Add a **Redirect/Rewrite Rule** in Render:
> - **Source:** `/*`
> - **Destination:** `/index.html`
> - **Type:** `Rewrite`
> This ensures that direct navigation to routes like `/about` or `/placement-services` works correctly.

---

## Step 5 — Final Cross-Link (Critical!)

After both are deployed:

1. Copy your **Render frontend URL** (e.g. `https://usnexttech.onrender.com`)
2. Go to Vercel backend project → **Settings → Environment Variables**
3. Add/update `FRONTEND_URL` = `https://usnexttech.onrender.com`
4. **Redeploy** the backend (Deployments → Redeploy)

This enables CORS to correctly allow your frontend to call the backend API.

---

## Project Structure Reference

```
demo-usnext/
├── backend/              ← Deploy to Vercel
│   ├── src/
│   │   ├── server.js
│   │   ├── config/db.js
│   │   ├── routes/
│   │   └── controllers/
│   ├── vercel.json       ← Vercel serverless config
│   └── package.json
│
└── frontend/             ← Deploy to Render
    ├── src/
    ├── public/
    │   └── hero-bg.mp4
    ├── index.html
    └── package.json
```

---

## Local Development

```bash
# Backend
cd backend
npm install
npm run dev   # Runs on http://localhost:5000

# Frontend (new terminal)
cd frontend
npm install
npm run dev   # Runs on http://localhost:5173
```
