import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Content Security Policy
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; connect-src 'self' http://localhost:8000/;"
    );
    next();
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});