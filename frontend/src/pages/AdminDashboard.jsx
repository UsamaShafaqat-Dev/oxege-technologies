import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("services");
  const token = localStorage.getItem("adminToken");

  // ==========================================
  // SERVICES STATE
  // ==========================================
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [serviceFormData, setServiceFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  // ==========================================
  // PORTFOLIO STATE
  // ==========================================
  const [portfolios, setPortfolios] = useState([]);
  const [loadingPortfolios, setLoadingPortfolios] = useState(false);
  const [showPortfolioForm, setShowPortfolioForm] = useState(false);
  const [editingPortfolioId, setEditingPortfolioId] = useState(null);
  const [portfolioFormData, setPortfolioFormData] = useState({
    title: "",
    category: "",
    techStack: "",
    liveLink: "",
    image: null,
  });

  // ==========================================
  // INQUIRIES STATE
  // ==========================================
  const [inquiries, setInquiries] = useState([]);
  const [loadingInquiries, setLoadingInquiries] = useState(false);

  // ==========================================
  // USE EFFECT (Fetch Data)
  // ==========================================
  useEffect(() => {
    if (!token) {
      navigate("/admin");
    } else {
      fetchServices();
      fetchPortfolios();
      fetchInquiries();
    }
  }, [token, navigate]);

  // ==========================================
  // SERVICES LOGIC
  // ==========================================
  const fetchServices = async () => {
    setLoadingServices(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/services");
      setServices(data);
    } catch (error) {
      toast.error("Failed to load services!");
    } finally {
      setLoadingServices(false);
    }
  };

  const handleServiceInputChange = (e) => {
    if (e.target.name === "image") {
      setServiceFormData({ ...serviceFormData, image: e.target.files[0] });
    } else {
      setServiceFormData({
        ...serviceFormData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const resetServiceForm = () => {
    setEditingServiceId(null);
    setServiceFormData({ title: "", description: "", image: null });
    setShowServiceForm(false);
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading(
      editingServiceId ? "Updating service..." : "Adding new service...",
    );
    const data = new FormData();
    data.append("title", serviceFormData.title);
    data.append("description", serviceFormData.description);
    if (serviceFormData.image) data.append("image", serviceFormData.image);

    try {
      if (editingServiceId) {
        await axios.put(
          `http://localhost:5000/api/services/${editingServiceId}`,
          data,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        toast.success("Service updated successfully!", { id: toastId });
      } else {
        if (!serviceFormData.image)
          return toast.error("Image is required!", { id: toastId });
        await axios.post("http://localhost:5000/api/services", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Service added successfully!", { id: toastId });
      }
      resetServiceForm();
      fetchServices();
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  const handleServiceDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-4 min-w-[250px]">
          <p className="font-bold text-[#0F172A] text-center">
            Delete this service?
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-100 px-5 py-2 rounded-xl text-sm font-bold text-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const deleteToast = toast.loading("Deleting...");
                try {
                  await axios.delete(
                    `http://localhost:5000/api/services/${id}`,
                    { headers: { Authorization: `Bearer ${token}` } },
                  );
                  toast.success("Deleted!", { id: deleteToast });
                  fetchServices();
                } catch (error) {
                  toast.error("Error deleting", { id: deleteToast });
                }
              }}
              className="bg-red-50 text-red-600 px-5 py-2 rounded-xl text-sm font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: 8000, position: "top-center" },
    );
  };

  // ==========================================
  // PORTFOLIO LOGIC
  // ==========================================
  const fetchPortfolios = async () => {
    setLoadingPortfolios(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/portfolio");
      setPortfolios(data.data);
    } catch (error) {
      toast.error("Failed to load portfolio!");
    } finally {
      setLoadingPortfolios(false);
    }
  };

  const handlePortfolioInputChange = (e) => {
    if (e.target.name === "image") {
      setPortfolioFormData({ ...portfolioFormData, image: e.target.files[0] });
    } else {
      setPortfolioFormData({
        ...portfolioFormData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handlePortfolioEdit = (project) => {
    setEditingPortfolioId(project._id);
    setPortfolioFormData({
      title: project.title,
      category: project.category,
      techStack: project.techStack,
      liveLink: project.liveLink || "",
      image: null,
    });
    setShowPortfolioForm(true);
  };

  const resetPortfolioForm = () => {
    setEditingPortfolioId(null);
    setPortfolioFormData({
      title: "",
      category: "",
      techStack: "",
      liveLink: "",
      image: null,
    });
    setShowPortfolioForm(false);
  };

  const handlePortfolioSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading(
      editingPortfolioId ? "Updating project..." : "Adding project...",
    );
    const data = new FormData();
    data.append("title", portfolioFormData.title);
    data.append("category", portfolioFormData.category);
    data.append("techStack", portfolioFormData.techStack);
    data.append("liveLink", portfolioFormData.liveLink);
    if (portfolioFormData.image) data.append("image", portfolioFormData.image);

    try {
      if (editingPortfolioId) {
        await axios.put(
          `http://localhost:5000/api/portfolio/${editingPortfolioId}`,
          data,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        toast.success("Project updated!", { id: toastId });
      } else {
        if (!portfolioFormData.image)
          return toast.error("Image required!", { id: toastId });
        await axios.post("http://localhost:5000/api/portfolio", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Project added!", { id: toastId });
      }
      resetPortfolioForm();
      fetchPortfolios();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!", {
        id: toastId,
      });
    }
  };

  const handlePortfolioDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-4 min-w-[250px]">
          <p className="font-bold text-[#0F172A] text-center">
            Delete this project?
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-100 px-5 py-2 rounded-xl text-sm font-bold text-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const deleteToast = toast.loading("Deleting...");
                try {
                  await axios.delete(
                    `http://localhost:5000/api/portfolio/${id}`,
                    { headers: { Authorization: `Bearer ${token}` } },
                  );
                  toast.success("Deleted!", { id: deleteToast });
                  fetchPortfolios();
                } catch (error) {
                  toast.error("Error deleting", { id: deleteToast });
                }
              }}
              className="bg-red-50 text-red-600 px-5 py-2 rounded-xl text-sm font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: 8000, position: "top-center" },
    );
  };

  // ==========================================
  // INQUIRIES LOGIC
  // ==========================================
  const fetchInquiries = async () => {
    setLoadingInquiries(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/inquiries", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInquiries(data.data);
    } catch (error) {
      toast.error("Failed to load inquiries!");
    } finally {
      setLoadingInquiries(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const statusToast = toast.loading("Updating status...");
    try {
      await axios.put(
        `http://localhost:5000/api/inquiries/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      toast.success("Status updated!", { id: statusToast });
      fetchInquiries();
    } catch (error) {
      toast.error("Failed to update status", { id: statusToast });
    }
  };

  const handleInquiryDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-4 min-w-[250px]">
          <p className="font-bold text-[#0F172A] text-center">
            Delete this inquiry?
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-100 px-5 py-2 rounded-xl text-sm font-bold text-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const deleteToast = toast.loading("Deleting...");
                try {
                  await axios.delete(
                    `http://localhost:5000/api/inquiries/${id}`,
                    { headers: { Authorization: `Bearer ${token}` } },
                  );
                  toast.success("Inquiry Deleted!", { id: deleteToast });
                  fetchInquiries();
                } catch (error) {
                  toast.error("Error deleting inquiry", { id: deleteToast });
                }
              }}
              className="bg-red-50 text-red-600 px-5 py-2 rounded-xl text-sm font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: 8000, position: "top-center" },
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logged out");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-12">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Main Container - Adjusted padding so it flows naturally under the main website navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* PAGE HEADER (OxegeAdmin) - Yeh ab Navbar nahi hai, bas ek normal card hai jo page ke sath scroll hoga */}
        <div className="w-full bg-white shadow-sm border border-gray-100 px-6 py-5 flex justify-between items-center rounded-2xl mb-8">
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
            Oxege<span className="text-[#00A8A8]">Admin</span>
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-50 text-red-600 font-bold px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base hover:bg-red-100 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* TABS (Responsive) */}
        <div className="flex flex-wrap justify-start gap-2 sm:gap-4 mb-8 border-b border-gray-200 pb-4">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${activeTab === "services" ? "bg-[#00A8A8] text-white shadow-md" : "bg-white text-[#64748B] hover:bg-gray-50"}`}
          >
            Manage Services
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${activeTab === "portfolio" ? "bg-[#00A8A8] text-white shadow-md" : "bg-white text-[#64748B] hover:bg-gray-50"}`}
          >
            Manage Portfolio
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center justify-center gap-2 ${activeTab === "messages" ? "bg-[#00A8A8] text-white shadow-md" : "bg-white text-[#64748B] hover:bg-gray-50"}`}
          >
            Inquiries
            {inquiries.length > 0 && (
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs ${activeTab === "messages" ? "bg-white text-[#00A8A8]" : "bg-[#00A8A8] text-white"}`}
              >
                {inquiries.length}
              </span>
            )}
          </button>
        </div>

        {/* SERVICES TAB */}
        {activeTab === "services" && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Services
              </h2>
              {!showServiceForm && (
                <button
                  onClick={() => setShowServiceForm(true)}
                  className="bg-[#00A8A8] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#008c8c] transition-all shadow-md flex items-center gap-2 text-sm sm:text-base"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  Add New Service
                </button>
              )}
            </div>

            {showServiceForm && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                  {editingServiceId ? "Edit Service" : "Add New Service"}
                </h3>
                <form onSubmit={handleServiceSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">
                      Service Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={serviceFormData.title}
                      onChange={handleServiceInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={serviceFormData.description}
                      onChange={handleServiceInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">
                      Image{" "}
                      {editingServiceId && (
                        <span className="text-gray-400 font-normal">
                          (Leave empty to keep current)
                        </span>
                      )}
                    </label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleServiceInputChange}
                      accept="image/*"
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:bg-[#00A8A8]/10 file:text-[#00A8A8]"
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="bg-[#00A8A8] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#008c8c]"
                    >
                      Save Service
                    </button>
                    <button
                      type="button"
                      onClick={resetServiceForm}
                      className="bg-gray-100 text-gray-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {!showServiceForm && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loadingServices ? (
                  <p className="text-gray-500">Loading services...</p>
                ) : services.length === 0 ? (
                  <p className="text-gray-500">No services found. Add one!</p>
                ) : (
                  services.map((service) => (
                    <div
                      key={service._id}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all"
                    >
                      {/* Image matching Portfolio style */}
                      <div className="h-48 w-full bg-gray-100 relative group overflow-hidden">
                        <img
                          src={service.image?.url}
                          alt={service.title}
                          className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <h4 className="text-xl font-bold text-[#0F172A] mb-2">
                          {service.title}
                        </h4>
                        <p className="text-[#64748B] line-clamp-3 mb-6 text-sm">
                          {service.description}
                        </p>
                        <div className="flex gap-3 mt-auto">
                          <button
                            onClick={() => {
                              setEditingServiceId(service._id);
                              setServiceFormData({
                                title: service.title,
                                description: service.description,
                                image: null,
                              });
                              setShowServiceForm(true);
                            }}
                            className="flex-1 bg-[#00A8A8]/10 text-[#00A8A8] font-bold py-2.5 rounded-xl text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleServiceDelete(service._id)}
                            className="flex-1 bg-red-50 text-red-600 font-bold py-2.5 rounded-xl text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {/* PORTFOLIO TAB */}
        {activeTab === "portfolio" && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Portfolio Projects
              </h2>
              {!showPortfolioForm && (
                <button
                  onClick={() => setShowPortfolioForm(true)}
                  className="bg-[#00A8A8] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#008c8c] transition-all shadow-md flex items-center gap-2 text-sm sm:text-base"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  Add New Project
                </button>
              )}
            </div>

            {showPortfolioForm && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                  {editingPortfolioId ? "Edit Project" : "Add New Project"}
                </h3>
                <form onSubmit={handlePortfolioSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] mb-2">
                        Project Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={portfolioFormData.title}
                        onChange={handlePortfolioInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] mb-2">
                        Category
                      </label>
                      <input
                        type="text"
                        name="category"
                        value={portfolioFormData.category}
                        onChange={handlePortfolioInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] mb-2">
                        Tech Stack
                      </label>
                      <input
                        type="text"
                        name="techStack"
                        value={portfolioFormData.techStack}
                        onChange={handlePortfolioInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] mb-2">
                        Live Link
                      </label>
                      <input
                        type="text"
                        name="liveLink"
                        value={portfolioFormData.liveLink}
                        onChange={handlePortfolioInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">
                      Image{" "}
                      {editingPortfolioId && (
                        <span className="text-gray-400 font-normal">
                          (Leave empty to keep current)
                        </span>
                      )}
                    </label>
                    <input
                      type="file"
                      name="image"
                      onChange={handlePortfolioInputChange}
                      accept="image/*"
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:bg-[#00A8A8]/10 file:text-[#00A8A8]"
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="bg-[#00A8A8] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#008c8c]"
                    >
                      Save Project
                    </button>
                    <button
                      type="button"
                      onClick={resetPortfolioForm}
                      className="bg-gray-100 text-gray-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
            {!showPortfolioForm && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loadingPortfolios ? (
                  <p className="text-gray-500">Loading projects...</p>
                ) : portfolios.length === 0 ? (
                  <p className="text-gray-500">No projects found. Add one!</p>
                ) : (
                  portfolios.map((project) => (
                    <div
                      key={project._id}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all"
                    >
                      <div className="h-48 w-full bg-gray-100 relative group overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-full hover:bg-[#00A8A8] hover:text-white transition-colors"
                          >
                            Live Preview
                          </a>
                        )}
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <span className="text-[#00A8A8] text-xs font-extrabold uppercase tracking-wider mb-2">
                          {project.category}
                        </span>
                        <h4 className="text-xl font-bold text-[#0F172A] mb-2">
                          {project.title}
                        </h4>
                        <p className="text-[#64748B] text-sm mb-6 flex-grow">
                          <span className="font-semibold text-gray-600">
                            Stack:
                          </span>{" "}
                          {project.techStack}
                        </p>
                        <div className="flex gap-3 mt-auto">
                          <button
                            onClick={() => handlePortfolioEdit(project)}
                            className="flex-1 bg-[#00A8A8]/10 text-[#00A8A8] font-bold py-2.5 rounded-xl text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handlePortfolioDelete(project._id)}
                            className="flex-1 bg-red-50 text-red-600 font-bold py-2.5 rounded-xl text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================== */}
        {/* INQUIRIES TAB */}
        {/* ========================================== */}
        {activeTab === "messages" && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Client Inquiries
              </h2>
              <button
                onClick={fetchInquiries}
                className="bg-white border border-gray-200 text-[#64748B] font-bold px-4 py-2 rounded-xl hover:bg-gray-50 flex items-center gap-2 text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                Refresh
              </button>
            </div>

            {loadingInquiries ? (
              <p className="text-gray-500 font-medium animate-pulse">
                Loading inquiries...
              </p>
            ) : inquiries.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  No Inquiries Yet
                </h3>
                <p className="text-[#64748B]">
                  When clients contact you, their messages will appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {inquiries.map((inquiry) => (
                  <div
                    key={inquiry._id}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-[#0F172A] flex flex-wrap items-center gap-2">
                          {inquiry.fullName}
                          {inquiry.company && (
                            <span className="text-[10px] sm:text-xs font-normal bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {inquiry.company}
                            </span>
                          )}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1">
                          {new Date(inquiry.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <select
                        value={inquiry.status}
                        onChange={(e) =>
                          handleStatusChange(inquiry._id, e.target.value)
                        }
                        className={`px-3 py-1.5 rounded-full text-xs font-bold outline-none cursor-pointer border-0 shadow-sm transition-colors ${
                          inquiry.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : inquiry.status === "Contacted"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 mb-6 p-4 bg-[#F8FAFC] rounded-2xl text-xs sm:text-sm text-[#64748B]">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#00A8A8]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <a
                          href={`mailto:${inquiry.email}`}
                          className="hover:text-[#00A8A8] font-medium break-all"
                        >
                          {inquiry.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#00A8A8]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <a
                          href={`tel:${inquiry.phone}`}
                          className="hover:text-[#00A8A8] font-medium"
                        >
                          {inquiry.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#00A8A8]/10 text-[#00A8A8] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-lg border border-[#00A8A8]/20">
                        {inquiry.serviceRequired}
                      </span>
                      {inquiry.estimatedBudget && (
                        <span className="bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-lg">
                          Budget: {inquiry.estimatedBudget}
                        </span>
                      )}
                      {inquiry.timeline && (
                        <span className="bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-lg">
                          Time: {inquiry.timeline}
                        </span>
                      )}
                    </div>

                    <div className="flex-grow mb-6">
                      <p className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">
                        Project Details:
                      </p>
                      <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed bg-white border border-gray-100 p-3 rounded-xl whitespace-pre-wrap">
                        {inquiry.projectDetails}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex justify-end">
                      <button
                        onClick={() => handleInquiryDelete(inquiry._id)}
                        className="bg-red-50 text-red-600 font-bold px-6 py-2 rounded-xl text-xs sm:text-sm hover:bg-red-500 hover:text-white transition-all"
                      >
                        Delete Inquiry
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
