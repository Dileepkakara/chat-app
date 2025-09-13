//const express = require("express");
import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.router.js";
dotenv.config();
const app = express();
const _dirname = path.resolve();



const PORT = process.env.PORT || 3000;
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//make ready for deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../frontend/dist")));

    app.get("*", (_, res) => {
        res.sendFile(path.join(_dirname, "../frontend", "dist", 'index.html'));
    });
}

app.listen(3000, () => console.log("Server is running on port:" + PORT));