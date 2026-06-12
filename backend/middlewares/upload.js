import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js"; // Aapki cloudinary config file yahan import ho rahi hai

// Cloudinary Storage Setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "oxege_services", // Cloudinary mein is naam ka folder ban jayega
    allowedFormats: ["jpg", "png", "jpeg", "webp"], // Sirf images allow hongi
  },
});

const upload = multer({ storage });

export default upload;
