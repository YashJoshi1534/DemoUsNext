import express from 'express';
import { sendEmail } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact/send
router.post('/send', sendEmail);

export default router;
