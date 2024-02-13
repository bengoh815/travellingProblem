import express from "express";
import usersRouter from "./routes/userRouter";

const app = express();

// Middleware

// Routes
app.get("/", (req, res) => res.send("Hello world!"));
app.use("/api", usersRouter);

export default app;
