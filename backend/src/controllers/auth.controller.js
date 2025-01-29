import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  const { fullName, password, email } = req.body;
  try {
    if (!fullName || !password || !email) {
      return res.status(400).json({ message: "all fields are required!!!" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters!!" });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "email already exists!" });
    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(String(password), salt);
    const newuser = new User({
      fullName,
      email,
      password: hashedpass,
    });
    if (newuser) {
      generateToken(newuser._id, res);
      await newuser.save();
      res.status(201).json(newuser);
    } else {
      res.status(400).json({ message: "invalid user data!!" });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    if (error.name === "ValidationError") {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "internal server error!!!" });
    }
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid credentials!!" });
    }
    const isPassCorrect = await bcrypt.compare(password, user.password);
    if (!isPassCorrect) {
      return res.status(400).json({ message: "invalid credentials!!" });
    }
    generateToken(user._id, res);
    res.status(200).json(user);
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully!!" });
  } catch (error) {
    console.log("error in logout controller", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;
    if (!profilePic) {
      res.status(400).json({ message: "profpic is required!!" });
    }
    const uploadres = await cloudinary.uploader.upload(profilePic); // kinda bucket for our images not data base have in mind
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadres.secure_url },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("error in update Profile", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
