import express from "express";
import connectToDatabase from "./config/db";
import cors from "cors";
import usersRouter from "./routes/user.router";
import applicationsRouter from "./routes/application.routes";
import carsRouter from "./routes/car.routes";
import eventsRouter from "./routes/event.routes";
import groupsRouter from "./routes/group.routes";
import ridesRouter from "./routes/ride.routes";
import membershipsRouter from "./routes/membership.routes";
import { handleError } from "./middleware/errorHandler";
import authRouter from "./routes/auth.routes";
import { APIVersion } from "./utils/apiVersion";
import { authJWT, authRole } from "./middleware/auth/authMiddleware";

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: "*", // Allow all origins
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Apply CORS to all routes

// Database connection
connectToDatabase();

// Version
const v1 = APIVersion.v1;

/**
 * Routes
 */

// Public routes
app.use(`${v1}/auth`, authRouter);

// Protected routes
app.use(`${v1}/users`, authJWT, usersRouter);
app.use(`${v1}/applications`, applicationsRouter);
app.use(`${v1}/memberships`, membershipsRouter);
app.use(`${v1}/groups`, groupsRouter);

app.use(`${v1}/cars`, carsRouter);
app.use(`${v1}/events`, eventsRouter);
app.use(`${v1}/rides`, ridesRouter);
app.use(handleError);

export default app;
