import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceRequired: "Web Development",
    estimatedBudget: "RS 25k - 1 Lakh ($90-$350)",
    timeline: "1-2 Months",
    projectDetails: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending your inquiry...");

    try {
      await axios.post("http://localhost:5000/api/inquiries", formData);
      toast.success("Message sent successfully! We will contact you soon.", {
        id: toastId,
      });
      // Form reset
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        serviceRequired: "Web Development",
        estimatedBudget: "RS 25k - 1 Lakh ($90-$350)",
        timeline: "1-2 Months",
        projectDetails: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] font-sans min-h-screen">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4">
            Let's Work <span className="text-[#00A8A8]">Together</span>
          </h2>
          <p className="text-[#64748B] text-lg font-medium">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8]"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Phone Number *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8]"
                  placeholder="e.g., +92 300 1234567"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8]"
                  placeholder="Your Company Name"
                />
              </div>
            </div>

            {/* Project Requirements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Service Required *
                </label>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8] text-sm md:text-base cursor-pointer"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="MERN Stack Development">
                    MERN Stack Development
                  </option>
                  <option value="App Development">App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="E-Commerce Solution">
                    E-Commerce Solution
                  </option>
                  <option value="Custom Software">Custom Software</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Estimated Budget
                </label>
                <select
                  name="estimatedBudget"
                  value={formData.estimatedBudget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8] text-sm md:text-base cursor-pointer"
                >
                  <option value="RS 25k - 1 Lakh ($90-$350)">
                    RS 25k - 1 Lakh ($90-$350)
                  </option>
                  <option value="RS 1 Lakh - 3 Lakh ($350-$1k)">
                    RS 1 Lakh - 3 Lakh ($350-$1k)
                  </option>
                  <option value="RS 3 Lakh - 10 Lakh ($1k-$3.5k)">
                    RS 3 Lakh - 10 Lakh ($1k-$3.5k)
                  </option>
                  <option value="RS 10 Lakh+ ($3.5k+)">
                    RS 10 Lakh+ ($3.5k+)
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8] text-sm md:text-base cursor-pointer"
                >
                  <option value="Less than 1 Month">Less than 1 Month</option>
                  <option value="1-2 Months">1-2 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            {/* Message Box */}
            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-2">
                Project Details *
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8]"
                placeholder="Tell us about your project goals and requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00A8A8] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#008c8c] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_rgba(0,168,168,0.25)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
