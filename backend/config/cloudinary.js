import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Terminal mein check karne ke liye test
console.log("--- CLOUDINARY TEST ---");
console.log(
  "Cloud Name:",
  process.env.CLOUDINARY_CLOUD_NAME ? "✅ Mil gaya" : "❌ Missing",
);
console.log(
  "API Key:",
  process.env.CLOUDINARY_API_KEY ? "✅ Mil gaya" : "❌ Missing",
);
console.log(
  "API Secret:",
  process.env.CLOUDINARY_API_SECRET ? "✅ Mil gaya" : "❌ Missing",
);
console.log("-----------------------");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
