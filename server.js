import dotenv from "dotenv";
// load env variables
dotenv.config();

import express from "express";

import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
console.log("ENV FILE VALUE:", process.env.MONGODB_URL);
import cors from 'cors'
// connect database
connectDB();

const app = express();

// middlewares
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth', authRoutes)


// test route
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Welcome to Backend API",
  });
});

// PORT
const PORT = process.env.PORT || 8000;

// listen
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});