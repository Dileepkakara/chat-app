import mongoose from "mongoose";

export const connectDB = async (url) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully:", conn.connection.host);
    } catch (error) {
        console.error("error connecting to MONGODB:", error);
        process.exit(1);//1 status code means fail, 0 means success
    }

}