import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
      // Isme hum HTML save karenge React Quill (Text Editor) se
    },
    image: {
      type: String,
      required: [true, "Blog image URL is required"],
      // Cloudinary ka link yahan aayega
    },
    author: {
      type: String,
      default: "Admin", // Ya aap Oxege Technologies likh sakte hain
    },
  },
  {
    timestamps: true, // Yeh khud hi createdAt aur updatedAt date save kar lega
  },
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
