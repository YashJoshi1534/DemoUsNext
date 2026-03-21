import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

let transporter;

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/"/g, '') : ''
      }
    });
  }
  return transporter;
};

export const sendEmail = async (req, res) => {
  console.log(`\n--- [Contact API] Incoming request from IP: ${req.ip} ---`);
  console.log(`[Contact API] Payload received:`, req.body);

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      console.warn(`[Contact API] Validation failed: Missing required fields.`);
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }

    // 1. Save to MongoDB
    console.log(`[Contact API] Attempting to save contact to database...`);
    const newContact = await Contact.create({
      name,
      email,
      phone,
      message
    });
    console.log(`[Contact API] Successfully saved to MongoDB. Document ID: ${newContact._id}`);

    // 2. Email content sent to support
    const companyMailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.SUPPORT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    // 3. Branded auto-reply html theme to the user
    const userMailOptions = {
      from: `"US Next Tech" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We've received your inquiry! - US Next Tech`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #0F172A; border: 1px solid #eee; border-radius: 10px; background-color: #ffffff;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #F4F7FB;">
            <h2 style="color: #1D3557; margin: 0;">US<span style="color: #E63946;">Next</span>Tech</h2>
          </div>
          <div style="padding: 20px 0;">
            <p style="font-size: 16px; color: #64748B;">Hi <strong>${name}</strong>,</p>
            <p style="font-size: 16px; color: #64748B; line-height: 1.6;">
              Thank you for reaching out to US Next Tech! This email is to confirm we've received your message.
            </p>
            <p style="font-size: 16px; color: #64748B; line-height: 1.6;">
              Our team of placement and career experts is reviewing your inquiry and will get back to you shortly.
            </p>
            <div style="margin: 30px 0; padding: 15px; background-color: #F4F7FB; border-left: 4px solid #1D3557; border-radius: 4px;">
              <p style="margin: 0; font-size: 14px; color: #1D3557;"><strong>Your Message:</strong></p>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #64748B; font-style: italic;">"${message}"</p>
            </div>
          </div>
          <div style="text-align: center; padding-top: 20px; border-top: 2px solid #F4F7FB; font-size: 12px; color: #94A3B8;">
            <p>Ready to accelerate your tech career?</p>
            <p>&copy; ${new Date().getFullYear()} US Next Tech. All rights reserved.</p>
          </div>
        </div>
      `
    };

    console.log(`[Contact API] Attempting to send emails via Nodemailer...`);
    const mailer = getTransporter();
    // Send both emails using Promise.all
    await Promise.all([
      mailer.sendMail(companyMailOptions),
      mailer.sendMail(userMailOptions)
    ]);
    console.log(`[Contact API] Confirmation emails pushed successfully to SMTP.`);

    res.status(200).json({ success: true, message: 'Message securely saved and email sent successfully!' });
  } catch (error) {
    console.error('\n================ ERROR ENCOUNTERED ================');
    console.error('[Contact API Error] Failed processing contact request:');
    console.error(error); // Log full error trace
    console.error('===================================================\n');
    res.status(500).json({ success: false, error: 'Internal Server Error. Please try again later.' });
  }
};
