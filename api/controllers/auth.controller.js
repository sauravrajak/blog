import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

// creating signup controller and exporting it
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(200).json("Signup Successfull");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
