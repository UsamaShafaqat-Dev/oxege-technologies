import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // <-- Yahan import add kiya hai

const ManageBlogs = () => {
  const navigate = useNavigate(); // <-- Yahan navigate add kiya hai

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("Oxege Technologies");
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("adminToken");
  const API_URL = "https://oxege-backend.onrender.com/api/blogs";

  // 1. Fetch All Blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(API_URL);
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to load blogs!");
    } finally {
      setLoading(false);
    }
  };

  // <-- YAHAN SECURITY CHECK ADD KIYA HAI -->
  useEffect(() => {
    if (!token) {
      navigate("/admin"); // Agar token nahi hai to login pe bhej dega
    } else {
      fetchBlogs();
    }
  }, [token, navigate]);

  // Reset Form
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setContent("");
    setImage("");
    setAuthor("Oxege Technologies");
    setShowForm(false);
  };

  // 2. Handle Submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading(
      editingId ? "Updating Blog..." : "Publishing Blog...",
    );
    const blogData = { title, content, image, author };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, blogData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Blog updated successfully!", { id: toastId });
      } else {
        await axios.post(API_URL, blogData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Blog published successfully!", { id: toastId });
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!", {
        id: toastId,
      });
    }
  };

  // 3. Edit Button Click
  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setTitle(blog.title);
    setContent(blog.content);
    setImage(blog.image);
    setAuthor(blog.author);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 4. Delete Blog
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-4 min-w-[250px]">
          <p className="font-bold text-[#0F172A] text-center">
            Delete this blog?
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
                  await axios.delete(`${API_URL}/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  toast.success("Blog Deleted!", { id: deleteToast });
                  fetchBlogs();
                } catch (error) {
                  toast.error("Error deleting blog", { id: deleteToast });
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

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
          Blogs & Insights
        </h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
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
            Add New Blog
          </button>
        )}
      </div>

      {/* FORM SECTION */}
      {showForm && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">
            {editingId ? "Edit Blog" : "Add New Blog"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8]"
                  placeholder="Enter blog title"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-2">
                Feature Image URL
              </label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 outline-none focus:border-[#00A8A8]"
                placeholder="Paste Cloudinary Image URL here"
              />
            </div>

            {/* FIXED EDITOR SPACING FOR MOBILE */}
            <div className="mb-24 sm:mb-16">
              <label className="block text-sm font-bold text-[#0F172A] mb-2">
                Blog Content
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                className="h-64"
              />
            </div>

            {/* FIXED BUTTONS LAYOUT FOR MOBILE */}
            <div className="flex flex-row gap-3 sm:gap-4 pt-12 sm:pt-4">
              <button
                type="submit"
                className="flex-1 sm:flex-none bg-[#00A8A8] text-white font-bold px-4 sm:px-8 py-3 rounded-xl hover:bg-[#008c8c] transition-colors text-sm sm:text-base text-center"
              >
                {editingId ? "Update Blog" : "Publish Blog"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 sm:flex-none bg-gray-100 text-gray-600 font-bold px-4 sm:px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm sm:text-base text-center"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* BLOGS LIST SECTION */}
      {!showForm && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-gray-500">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-gray-500">No blogs published yet. Add one!</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all group"
              >
                <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-[#00A8A8] text-xs font-extrabold uppercase tracking-wider mb-2">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-2 line-clamp-2">
                    {blog.title}
                  </h4>
                  <p className="text-[#64748B] text-xs mb-6 flex-grow">
                    By {blog.author}
                  </p>

                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="flex-1 bg-[#00A8A8]/10 text-[#00A8A8] font-bold py-2.5 rounded-xl text-sm hover:bg-[#00A8A8] hover:text-white transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="flex-1 bg-red-50 text-red-600 font-bold py-2.5 rounded-xl text-sm hover:bg-red-50 hover:text-white transition-colors"
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
  );
};

export default ManageBlogs;
