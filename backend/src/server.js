import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

// Load env variables first
dotenv.config();

const app = express();

// Middleware
const corsOptions = {
    origin: [
        'http://localhost:5173',
        process.env.FRONTEND_URL
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes — connect to DB on each invocation (Vercel serverless pattern)
app.use('/api/contact', async (req, res, next) => {
    await connectDB();
    next();
}, contactRoutes);

// Legacy redirect
app.post('/api/send-email', (req, res) => {
    res.redirect(307, '/api/contact/send');
});

// Root route
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        service: 'US Next Tech API',
        version: '1.0.0',
        endpoints: {
            health: '/api/health',
            contact: 'POST /api/contact/send'
        }
    });
});

// Health check — does NOT require DB
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'US Next Tech Backend fully operational.' });
});

// Start server only in local dev (not in Vercel serverless)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`[Server] Running on port ${PORT}`);
        });
    });
}

export default app;
