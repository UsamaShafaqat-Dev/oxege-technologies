import express from "express";
import {
  submitInquiry,
  getAllInquiries,
  deleteInquiry,
  updateInquiryStatus
} from "../controllers/inquiryController.js";
import { protect } from "../middlewares/authMiddleware.js";


const router = express.Router();
router.put("/:id", protect, updateInquiryStatus);

router.post("/", submitInquiry); // Public (Website se inquiry bhejne ke liye)
router.get("/", protect, getAllInquiries); // Protected (Admin Panel ke liye)
router.delete("/:id", protect, deleteInquiry); // Protected (Admin Panel ke liye)

export default router;
