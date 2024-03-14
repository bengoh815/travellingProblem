import express from "express";
import connectToDatabase from "./config/db";
import cors from "cors";
import usersRouter from "./routes/userRouter";

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: "*", // Allow all origins
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS to all routes

// Database connection
connectToDatabase();

// Routes
app.get("/", (req, res) => res.send("Hello world!"));
app.use(usersRouter);

export default app;
