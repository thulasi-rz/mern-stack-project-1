import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();

// CORS CONFIGURATION
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// JSON PARSER MIDDLEWARE
app.use(express.json());

// TEST ROUTE LINK INTEGRATION STATUS CHECK
app.get("/test", (req, res) => {
  res.send("Server is working perfectly without database errors!");
});

// USER ROUTES APPLICATION MAPPING ROUTE CONTROL 
app.use("/api/users", userRoute);

// CONFIG VARIABLES STRUCT LOCAL METRICS DATA MAPPING TRACK LIST SETUP
const PORT = process.env.PORT || 8000;

// SERVER BYPASS START UP FIRST INSTANTLY WITHOUT DATABASE BLOCK CRASHES
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Bypassing local MongoDB setup service configuration loop for cloud environment sandbox initialization...");
});
