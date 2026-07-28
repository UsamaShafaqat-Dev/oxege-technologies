import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  // useParams URL se blog ka ID nikalega
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Dhyan rakhein: Agar aapka local backend port 5000 par hai toh ye theek hai
        const { data } = await axios.get(
          `https://oxege-backend.onrender.com/api/blog${id}`,
        );
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#00A8A8]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
        <h2 className="text-3xl font-bold text-[#001E26] mb-4">
          Blog not found!
        </h2>
        <Link to="/blogs" className="text-[#00A8A8] font-bold hover:underline">
          Return to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00A8A8] font-bold mb-8 transition-colors"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to all blogs
        </Link>

        {/* Main Blog Content Container */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          {/* Header Image */}
          <div className="w-full h-64 md:h-[400px] bg-gray-100">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            {/* Author & Date info */}
            <div className="flex items-center gap-3 text-sm text-[#00A8A8] font-extrabold uppercase tracking-wider mb-6">
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              <span className="w-1.5 h-1.5 bg-[#00A8A8] rounded-full"></span>
              <span>{blog.author}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#001E26] mb-10 leading-tight">
              {blog.title}
            </h1>

            {/* Dynamic HTML Content (from React Quill) */}
            {/* Is class ko thora style diya gaya hai taake Editor ki headings aur lists theek se nazar aayen */}
            <div
              className="text-gray-600 text-lg leading-relaxed space-y-6 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-[#001E26] [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#001E26] [&>ul]:list-disc [&>ul]:ml-5 [&>ol]:list-decimal [&>ol]:ml-5"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
