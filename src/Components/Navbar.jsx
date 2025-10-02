import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import MiniNavbar from "./Mobilescreen/MiniNavbar"; // ✅ import kiya

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll ke hisaab se shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.06, delayChildren: 0.04 },
    },
  };
  const menuItemVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const navLinks = [
    { name: "WOMAN", path: "/women" },
    { name: "MAN", path: "/man" },
    { name: "UNISEX", path: "/unisex" },
    { name: "SPECIAL OFFERS", path: "/offers" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${isTop ? "bg-black" : "bg-black shadow-md"
        }`}
    >
      {/* 🔹 Top row */}
      <div className="flex items-center justify-between p-3 lg:px-8 text-white relative">
        {/* Left area */}
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((s) => !s)}
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center">
            <div className="w-[20vw] max-w-[520px] min-w-[280px] relative">
              <div className="absolute inset-y-0 left-0 bg-yellow-400/95 hover:bg-yellow-400 px-4 flex items-center rounded-full">
                <FaSearch className="text-black" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border border-gray-700 text-white rounded-full pl-14 pr-14 py-2 text-sm outline-none placeholder-gray-300 focus:placeholder-transparent"
                aria-label="Search"
              />
            </div>
          </div>
        </div>

        {/* Center logo (desktop) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:flex hidden">
          <Link to="/" aria-label="Home">
            <img src="/Images/weblogo3.png" alt="Logo" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Mobile logo */}
        <div className="lg:hidden">
          <Link to="/" aria-label="Home">
            <img src="/Images/weblogo3.png" alt="Logo" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          {/* Mobile search button */}
          <button
            className="lg:hidden p-2 rounded-full bg-yellow-400/95 hover:bg-yellow-400 flex items-center justify-center"
            aria-label="Open search"
            onClick={() => setShowSearch((s) => !s)}
          >
            <FaSearch className="text-black" />
          </button>

          {/* Desktop profile */}
          <Link to="/profile" className="hidden lg:inline-flex p-2 rounded-md" aria-label="Profile">
            <FaUser />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative p-2 rounded-md" aria-label="Cart">
            <FaShoppingBag />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* 🔹 Mobile search expansion */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden px-4 pb-3 bg-black"
          >
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 bg-yellow-400/95 px-3 flex items-center rounded-full">
                <FaSearch className="text-black" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="w-full bg-transparent border border-gray-700 text-white rounded-full pl-12 pr-12 py-2 text-sm outline-none placeholder-gray-300 focus:placeholder-transparent"
                aria-label="Mobile search input"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden bg-black text-white flex flex-col px-2 py-3"
            aria-label="Mobile menu"
          >
            <motion.ul className="w-full">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={menuItemVariants}
                  className="border-b border-white/20"
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-2 text-base ${link.name === "SPECIAL OFFERS"
                      ? "text-red-400 font-semibold"
                      : "text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="h-px bg-white/30 mt-3" />
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 🔹 Desktop Mini Navbar import kiya */}
      <MiniNavbar />
    </header>
  );
};

export default Navbar;
