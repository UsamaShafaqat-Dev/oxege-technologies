import express from "express";
import Blog from "../models/blogModel.js";

const router = express.Router();

// 1. GET ALL BLOGS (Public - Website par dikhane ke liye)
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // Latest pehle aayega
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
});

// 2. GET SINGLE BLOG (Public - Detail page ke liye)
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error });
  }
});

// 3. CREATE BLOG (Admin only)
router.post("/", async (req, res) => {
  try {
    const { title, content, image, author } = req.body;
    const newBlog = new Blog({ title, content, image, author });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
});

// 4. UPDATE BLOG (Admin only)
router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }, // Update hone ke baad naya data return karega
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
});

// 5. DELETE BLOG (Admin only)
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
});

export default router;
