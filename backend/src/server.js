import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

// Load env variables first
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
    origin: [
        'http://localhost:5173',
        process.env.FRONTEND_URL // Add your Render frontend URL here in .env
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Optional: Forward legacy route to new destination if needed, though frontend will be updated
app.post('/api/send-email', (req, res) => {
    res.redirect(307, '/api/contact/send');
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'US Next Tech Backend fully operational.' });
});

app.listen(PORT, () => {
    console.log(`[Server] Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
