import Inquiry from "../models/Inquiry.js";

// @desc    Submit a new inquiry
// @route   POST /api/inquiries
// @access  Public
export const submitInquiry = async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    const savedInquiry = await newInquiry.save();

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully!",
      data: savedInquiry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to submit inquiry",
      error: error.message,
    });
  }
};

// @desc    Get all inquiries (For Admin Panel)
// @route   GET /api/inquiries
// @access  Public
export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// @desc    Delete an inquiry (For Admin Panel)
// @route   DELETE /api/inquiries/:id
// @access  Public
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res
        .status(404)
        .json({ success: false, message: "Inquiry not found" });
    }

    await inquiry.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Inquiry deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc    Update inquiry status
// @route   PUT /api/inquiries/:id
// @access  Protected
export const updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );
    if (!inquiry)
      return res
        .status(404)
        .json({ success: false, message: "Inquiry not found" });

    res.status(200).json({ success: true, data: inquiry });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
