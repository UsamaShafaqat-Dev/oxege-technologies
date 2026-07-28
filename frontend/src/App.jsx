import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail"; // Yeh naya page import kar liya
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageBlogs from './pages/ManageBlogs';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-dark min-h-screen flex flex-col bg-light">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/blogs" element={<ManageBlogs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />

            {/* Portfolio Detail ka dynamic route */}
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
