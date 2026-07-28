import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://oxege-backend.onrender.com/api/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#00A8A8]"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#001E26] mb-4">
            Our Latest <span className="text-[#00A8A8]">Insights</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends, tips, and news in the digital
            world brought to you by Oxege Technologies.
          </p>
        </div>

        {/* Blogs Grid */}
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500 text-xl font-medium mt-10">
            No blogs published yet. Check back later!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                {/* Blog Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-[#00A8A8] font-bold uppercase tracking-wider mb-3">
                    {new Date(blog.createdAt).toLocaleDateString()} •{" "}
                    {blog.author}
                  </div>

                  <h3 className="text-xl font-bold text-[#001E26] mb-3 line-clamp-2 group-hover:text-[#00A8A8] transition-colors">
                    {blog.title}
                  </h3>

                  {/* ReactQuill ka HTML render karne ke liye dangerouslySetInnerHTML use hota hai */}
                  <div
                    className="text-gray-600 mb-6 line-clamp-3 text-sm"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  ></div>

                  {/* Read More Button */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                      to={`/blog/${blog._id}`}
                      className="text-[#00A8A8] font-bold hover:text-[#001E26] transition-colors flex items-center gap-2 w-fit"
                    >
                      Read Full Article
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
