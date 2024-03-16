import express from "express";
import connectToDatabase from "./config/db";
import cors from "cors";
import usersRouter from "./routes/userRouter";
import applicationsRouter from "./routes/applicationRoutes";
import carsRouter from "./routes/carRoutes";
import eventsRouter from "./routes/eventRoutes";
import groupsRouter from "./routes/groupRoutes";
import ridesRouter from "./routes/rideRoutes";
import membershipRouter from "./routes/membershipRoutes";

require("dotenv").config();

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
app.use(applicationsRouter);
app.use(carsRouter);
app.use(eventsRouter);
app.use(groupsRouter);
app.use(membershipRouter);
app.use(ridesRouter);
app.use(usersRouter);

export default app;
