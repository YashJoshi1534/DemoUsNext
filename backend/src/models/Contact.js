import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    phone: {
        type: String,
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    },
    status: {
        type: String,
        enum: ['New', 'In Progress', 'Resolved'],
        default: 'New'
    }
}, {
    timestamps: true
});

// The collection name should be specifically set to 'usnext' or mongoose pluralizes it
const Contact = mongoose.model('USNextContact', contactSchema, 'usnext');
export default Contact;
