import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const URL = process.env.MONGOURL;
const app = express();
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
app.use(express.json());

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// middleware
app.use((error, req, res, nest) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});
