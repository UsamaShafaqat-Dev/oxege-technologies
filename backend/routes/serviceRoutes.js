import express from "express";
import {
  createService,
  getAllServices,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";
import upload from "../middlewares/upload.js";

// Yahan humne 'protect' import kiya hai kyunke aapki file mein function ka naam yahi hai
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public Route (For frontend display)
router.get("/", getAllServices);

// Protected Admin Routes (Require Authentication)
router.post("/", protect, upload.single("image"), createService);
router.put("/:id", protect, upload.single("image"), updateService);
router.delete("/:id", protect, deleteService);

export default router;
