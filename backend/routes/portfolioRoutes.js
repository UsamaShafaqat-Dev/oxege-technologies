import express from "express";
import {
  createPortfolio,
  getAllPortfolio,
  updatePortfolio,
  deletePortfolio,
  getPortfolioById, // Yeh naya function import kiya hai
} from "../controllers/portfolioController.js";
import upload from "../middlewares/upload.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllPortfolio); // Public (Website par saray projects dikhane ke liye)
router.get("/:id", getPortfolioById); // Public (Specific project ki details dikhane ke liye)
router.post("/", protect, upload.single("image"), createPortfolio); // Protected
router.put("/:id", protect, upload.single("image"), updatePortfolio); // Protected
router.delete("/:id", protect, deletePortfolio); // Protected

export default router;
