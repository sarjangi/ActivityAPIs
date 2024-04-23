import express from "express";
import { client } from "./database/connection.js";
import { configureRoutes } from "./routes/route.js";

const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure routes
configureRoutes(app, client);

const PORT = 8001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));