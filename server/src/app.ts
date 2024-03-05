import express from "express";
import cors from "cors";
import usersRouter from "./routes/userRouter";

const app = express();

// Middleware
app.use(cors());

const corsOptions: cors.CorsOptions = {
  origin: "*", // Allow only this origin
};

// Routes
app.get("/", cors(corsOptions), (req, res) => res.send("Hello world!asdfsd"));
app.use("/api", usersRouter);

export default app;
