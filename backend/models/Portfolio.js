import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    category: {
      type: String, // Example: E-COMMERCE, CORPORATE SITE, MOBILE APP
      required: [true, "Category is required"],
      trim: true,
    },
    techStack: {
      type: String, // Example: Web App MERN Stack, React Native Expo
      required: [true, "Tech stack details are required"],
      trim: true,
    },
    liveLink: {
      type: String, // LIVE WEBSITE LINK YAHAN AAYEGA
      trim: true,
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL from Cloudinary is required"],
    },
    imageId: {
      type: String, // Ye image delete karne ke kaam aayega
    },
  },
  {
    timestamps: true,
  },
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
