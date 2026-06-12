import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    company: {
      type: String,
      trim: true,
      default: "", // Optional field
    },
    serviceRequired: {
      type: String,
      required: [true, "Please select a service"],
    },
    estimatedBudget: {
      type: String,
      trim: true,
    },
    timeline: {
      type: String,
      trim: true,
    },
    projectDetails: {
      type: String,
      required: [true, "Please provide project details"],
    },
    status: {
      type: String,
      enum: ["Pending", "Contacted", "Resolved"],
      default: "Pending", // Default status for new inquiries
    },
  },
  {
    timestamps: true, // Yeh automatically createdAt aur updatedAt ki date save karega
  },
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
