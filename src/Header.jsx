import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#232839]  left-0 border-b  border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Code2 className="h-5 w-5 text-[#232839]" />
            </div>
            <span className="text-xl font-bold text-[#a6a6b3]">3-Tech Developer</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-all font-medium ${
                isActive("/") ? "text-[#00eaff]" : "text-white hover:text-[#00eaff]"
              }`}
            >
              Home
            </Link>

            <Link
              to="/projects"
              className={`transition-all font-medium ${
                isActive("/projects") ? "text-[#00eaff]" : "text-white hover:text-[#00eaff]"
              }`}
            >
              Projects
            </Link>

            <Link
              to="/about"
              className={`transition-all font-medium ${
                isActive("/about") ? "text-[#00eaff]" : "text-white hover:text-[#00eaff]"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`transition-all font-medium ${
                isActive("/contact") ? "text-[#00eaff]" : "text-white hover:text-[#00eaff]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#232839] border-t border-gray-700 flex flex-col gap-4 px-6 py-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`text-lg ${
                isActive("/") ? "text-[#00eaff]" : "text-white hover:text-[#00eaff]"
              }`}
            >
              Home
            </Link>

            <Link
              to="/projects"
              onClick={() => setMobileOpen(false)}
              className={`text-lg ${
                isActive("/projects") ? "text-[#00eaff]" : "text-white hover:text-[#00eaff]"
              }`}
            >
              Projects
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={`text-lg ${
                isActive("/about") ? "text-[#00eaff]" : "text-white hover:text-[#00eaff]"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={`text-lg ${
                isActive("/contact") ? "text-[#00eaff]" : "text-white hover:text-[#00eaff]"
              }`}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Page content */}
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
