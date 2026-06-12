import Service from "../models/Service.js";
import cloudinary from "../config/cloudinary.js"; // Ensure your cloudinary file is also exporting correctly

// Create a new Service
export const createService = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newService = new Service({
      title,
      description,
      image: {
        url: req.file.path,
        publicId: req.file.filename,
      },
    });

    await newService.save();
    res
      .status(201)
      .json({ message: "Service created successfully", service: newService });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating service", error: error.message });
  }
};

// Get all Services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching services", error: error.message });
  }
};

// Update a Service
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const updateData = { title, description };

    // Conditional update: retain old image if no new file is uploaded
    if (req.file) {
      // Optional: Delete old image from Cloudinary to save space
      if (service.image && service.image.publicId) {
        await cloudinary.uploader.destroy(service.image.publicId);
      }

      updateData.image = {
        url: req.file.path,
        publicId: req.file.filename,
      };
    }

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true },
    );

    res
      .status(200)
      .json({
        message: "Service updated successfully",
        service: updatedService,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating service", error: error.message });
  }
};

// Delete a Service
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Delete image from Cloudinary before removing from DB
    if (service.image && service.image.publicId) {
      await cloudinary.uploader.destroy(service.image.publicId);
    }

    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting service", error: error.message });
  }
};
