import Portfolio from "../models/Portfolio.js";
import cloudinary from "../config/cloudinary.js";

// @desc    Add new portfolio project
// @route   POST /api/portfolio
export const createPortfolio = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Please upload an image" });
    }

    // Image ko Cloudinary par upload karo
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "oxege_portfolio",
    });

    // Database mein save karo (liveLink yahan add kar diya hai)
    const newPortfolio = new Portfolio({
      title: req.body.title,
      category: req.body.category,
      techStack: req.body.techStack,
      liveLink: req.body.liveLink,
      imageUrl: result.secure_url,
      imageId: result.public_id,
    });

    const savedPortfolio = await newPortfolio.save();
    res.status(201).json({ success: true, data: savedPortfolio });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc    Get all portfolio projects
// @route   GET /api/portfolio
export const getAllPortfolio = async (req, res) => {
  try {
    const projects = await Portfolio.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc    Update portfolio project
// @route   PUT /api/portfolio/:id
export const updatePortfolio = async (req, res) => {
  try {
    let project = await Portfolio.findById(req.params.id);
    if (!project)
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });

    // Jo text fields form mein aayi hain unko update karo, warna purani values retain karo
    // Empty strings aane par database field overwrite nahi hogi
    const updatedData = {
      title: req.body.title || project.title,
      category: req.body.category || project.category,
      techStack: req.body.techStack || project.techStack,
      liveLink: req.body.liveLink || project.liveLink,
    };

    // Agar user ne nayi image upload ki hai, toh purani delete karke nayi lagao
    if (req.file) {
      // Purani image cloudinary se delete karo (safety check ke sath)
      if (project.imageId) {
        await cloudinary.uploader.destroy(project.imageId);
      }

      // Nayi image upload karo
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "oxege_portfolio",
      });

      updatedData.imageUrl = result.secure_url;
      updatedData.imageId = result.public_id;
    }

    project = await Portfolio.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc    Delete portfolio project
// @route   DELETE /api/portfolio/:id
export const deletePortfolio = async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);
    if (!project)
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });

    // Image ko Cloudinary se permanently delete karo
    if (project.imageId) {
      await cloudinary.uploader.destroy(project.imageId);
    }

    // Phir database se delete karo
    await project.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const getPortfolioById = async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
