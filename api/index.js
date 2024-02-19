import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
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
