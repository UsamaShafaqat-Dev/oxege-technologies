import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js"; // NEW: Services import kiya

dotenv.config();

// Connect to Database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes); // NEW: Services route register kiya

// ==========================================
// NEW: Contact Form Route for Frontend
// ==========================================
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Backend terminal mein data print karwane ke liye
    console.log("Frontend se naya message aaya hai:", {
      name,
      email,
      subject,
      message,
    });

    // Frontend ko success response bhejna
    res
      .status(200)
      .json({ success: true, message: "Data received successfully!" });
  } catch (error) {
    console.error("Contact Route Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
// ==========================================

// Basic Health Check
app.get("/", (req, res) => {
  res.send("Oxege Technologies API is running perfectly!");
});

const PORT = process.env.PORT || 5000;



// ==========================================
// GLOBAL ERROR HANDLER (Asal masla pakarne ke liye)
// ==========================================
app.use((err, req, res, next) => {
  console.error("🔥 CLOUDINARY ERROR DETAILS:", JSON.stringify(err, null, 2));
  res.status(500).json({ success: false, message: "File upload error check terminal" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
