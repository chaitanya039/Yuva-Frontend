import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import dummyImg from "../assets/profile.png";
import {
  FaUser,
  FaShoppingCart,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser !== null && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null); // ✅ update state immediately
    setDropdownOpen(false); // optional

    // ✅ navigate to login with force re-render using key param
    navigate("/auth?logout=true");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "#about" },
    { name: "Categories", to: "#categories" },
    { name: "Products", to: "#products" },
    { name: "Manufacturing", to: "#manufacturing" },
    { name: "Services", to: "#services" },
    { name: "Contact", to: "#contact" },
  ];

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      localStorage.setItem("scrollTo", id);
      navigate("/");
    } else {
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const section = localStorage.getItem("scrollTo");
    if (section) {
      setTimeout(() => {
        const el = document.querySelector(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        localStorage.removeItem("scrollTo");
      }, 100); // wait for the DOM to load
    }
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-md border-b border-neutral-800"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="YUVA Logo" className="w-20" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.to === "/" ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-gray-200 hover:text-[#F7B614] text-md font-medium transition duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.to)}
                  className="text-gray-200 cursor-pointer hover:text-[#F7B614] text-md font-medium transition duration-300"
                >
                  {link.name}
                </button>
              )
            )}

            {/* Auth/Profile */}
            {!user ? (
              <Link
                to="/auth"
                className="ml-4 bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold px-5 py-2 rounded-full transition duration-300"
              >
                Sign In
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex cursor-pointer items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-full hover:bg-neutral-700 transition"
                >
                  <img
                    src={user.profileImg !== "" ? user.profileImg : dummyImg}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-white"
                  />
                  <span className="font-medium">{user.name.split(" ")[0]}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-neutral-800 text-white rounded-md shadow-lg overflow-hidden z-50">
                    <Link
                      to="/profile"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-900"
                    >
                      <FaUser /> Profile
                    </Link>
                    <Link
                      to="/cart"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-900"
                    >
                      <FaShoppingCart /> Cart
                    </Link>
                    <Link
                      to="/order-requests"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-900"
                    >
                      <FaBoxOpen /> Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-900"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-200 hover:text-[#F7B614] focus:outline-none transition"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[550px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-black/80 backdrop-blur-md px-4`}
      >
        <div className="space-y-2 py-4">
          {navLinks.map((link) =>
            link.to === "/" ? (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-200 hover:text-[#F7B614] px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.to)}
                className="block w-full text-left text-gray-200 hover:text-[#F7B614] px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                {link.name}
              </button>
            )
          )}

          {/* Mobile Auth/Profile */}
          {!user ? (
            <Link
              to="/auth"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold text-center px-4 py-2 rounded-full transition duration-300"
            >
              Sign In
            </Link>
          ) : (
            <div className="space-y-2">
              <Link
                to="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-200 font-semibold px-3 py-2 text-left hover:text-[#F7B614] transition"
              >
                Profile
              </Link>
              <Link
                to="/cart"
                onClick={() => setDropdownOpen(false)}
                className="block text-gray-200 font-semibold px-3 py-2 text-left hover:text-[#F7B614] transition"
              >
                Cart
              </Link>
              <Link
                to="/order-requests"
                onClick={() => setDropdownOpen(false)}
                className="block text-gray-200 font-semibold px-3 py-2 text-left hover:text-[#F7B614] transition"
              >
                Orders
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="block text-gray-200 font-semibold w-full text-left px-3 py-2 hover:text-[#F7B614] transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
