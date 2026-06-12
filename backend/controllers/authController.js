import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

// JWT Token Generate karne ka helper function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", // Token 30 din tak valid rahega
  });
};

// @desc    Register a new admin (Pehla account banane ke liye)
// @route   POST /api/auth/register
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res
        .status(400)
        .json({ success: false, message: "Admin already exists" });
    }

    const admin = await Admin.create({ name, email, password });

    if (admin) {
      res.status(201).json({
        success: true,
        message: "Admin registered successfully",
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid admin data" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc    Auth admin & get token (Login)
// @route   POST /api/auth/login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    // Compare user entered password with database hashed password
    if (admin && (await admin.matchPassword(password))) {
      res.status(200).json({
        success: true,
        message: "Login successful",
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: generateToken(admin._id), // Login hone par secure token milega
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
