import mongoose from "mongoose";

/**A schema is a JSON object that defines the structure and contents of your data. */

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// creating model

const User = mongoose.model("User", userSchema);

// exporting model which is User
export default User;
