import express from "express";
import connectToDatabase from "./config/db";
import cors from "cors";
import usersRouter from "./routes/user.router";
import applicationsRouter from "./routes/application.routes";
import carsRouter from "./routes/car.routes";
import eventsRouter from "./routes/event.routes";
import groupsRouter from "./routes/group.routes";
import ridesRouter from "./routes/ride.routes";
import membershipRouter from "./routes/membership.routes";
import { handleError } from "./middleware/errorHandler";

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: "*", // Allow all origins
};

// Middleware
app.use(express.json());
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
app.use(handleError);

export default app;
