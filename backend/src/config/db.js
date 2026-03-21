import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    if (isConnected) return; // Reuse connection across serverless invocations

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "usnext",
            serverSelectionTimeoutMS: 10000, // 10s timeout (not 52s)
            connectTimeoutMS: 10000,
        });
        isConnected = true;
        console.log(`[DB] MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("[DB] MongoDB connection failed:", err.message);
        // DO NOT call process.exit(1) — this kills the serverless function
        // Let individual route handlers deal with DB being unavailable
    }
};

export default connectDB;
