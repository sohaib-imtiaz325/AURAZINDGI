import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import bannerVideo from "../../assets/sliderVideo.mp4";
import thumbnail from "../../assets/thumbnail.jpeg";
import thumbnailVideo from "../../assets/thumbnailVideo.mp4";

import Footer from "../Footer";
import Navbar from "../Navbar";
import ProductList from "../Product_list";

const Miniherosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const slideDuration = 12000;
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const slides = [
    {
      type: "video",
      src: bannerVideo,
      heading: "Hello, Summer Saving",
      text: "Up to 25% off",
      button: null,
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      heading: "Double This Summer",
      text: "Buy 1 Get One Free",
      button: "SHOP NOW",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
      heading: "Double This Summer",
      text: "Buy 1 Get 1",
      button: "SHOP NOW",
    },
  ];

  const boards = [
    {
      type: "image",
      title: "Ayura – This Is How I Express Myself",
      text: "For the woman who leads with confidence and leaves a lasting impression.",
      src: thumbnail,
      href: "/collections/rasasi",
      button: "BUY NOW",
    },
    {
      type: "video",
      title: "Ayura – This Is How I Express Myself",
      text: "For the woman who leads with confidence and leaves a lasting impression.",
      src: thumbnailVideo,
      href: "",
      button: "SHOP NOW",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => {
      setAnimationKey((prev) => prev + 1);
    }, 50);
  }, [currentSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current =
      e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    touchEndX.current = null;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      touchEndX.current =
        e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current != null && touchEndX.current != null) {
      const deltaX = touchEndX.current - touchStartX.current;
      if (deltaX > 50) {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (deltaX < -50) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsDragging(false);
  };

  return (
    <>
      {/* ✅ Ye section sirf mobile pe dikhega */}
      <div className="block md:hidden">
        <section>
          <Navbar />
          {/* Hero Slider */}
          <div
            className={`relative w-full h-[60vh] overflow-hidden bg-gray-900 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 z-0 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                {slide.type === "video" ? (
                  <video
                    className="w-full h-full object-cover"
                    src={slide.src}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                  />
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-40 z-20">
                  <h1
                    key={`heading-${index}-${animationKey}`}
                    className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-500"
                  >
                    {slide.heading}
                  </h1>
                  <p
                    key={`text-${index}-${animationKey}`}
                    className="text-base sm:text-lg mb-6 text-white"
                  >
                    {slide.text}
                  </p>
                  {slide.button && (
                    <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white transition-all duration-300">
                      {slide.button}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Now Section */}
        <motion.section className="px-4 pt-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Explore Now
          </h2>
          <div className="flex flex-col  gap-6">
            {/* First big card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg relative w-full h-72"
            >
              <Link to="/men" className="block w-full">
                <img
                  src="/Images/men.jpg"
                  alt="Men"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-y-0 left-6 bottom-40 flex flex-col justify-center items-center whitespace-nowrap text-white font-bold text-2xl">
                  
                    <span
                      
                      className="transform rotate-90 origin-left"
                    >
                      MAN,S PERFUME
                    </span>
                  
                </div>
              </Link>
            </motion.div>

            {/* Two small cards */}
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg relative w-full h-72"
              >
                <Link to="/women">
                  <img
                    src="/Images/women.jpg"
                    alt="Women"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 text-white font-bold text-xl">
                    WOMEN
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg relative w-full h-72"
              >
                <Link to="/unisex">
                  <img
                    src="/Images/couple pic.jpg"
                    alt="Unisex"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                    UNISEX
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ✅ Boards - Only video fullscreen */}
        <section className="w-full my-12">
          <div className="grid grid-cols-1 gap-6">
            {boards
              .filter((card) => card.type === "video")
              .map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  className="relative w-full h-screen overflow-hidden rounded-lg"
                >
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={card.src}
                    autoPlay
                    loop
                    muted
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                    {card.title && (
                      <h2 className="text-2xl sm:text-3xl text-amber-400 font-bold mb-2">
                        {card.title}
                      </h2>
                    )}
                    {card.text && (
                      <p className="text-base sm:text-lg">{card.text}</p>
                    )}
                    {card.button && (
                      <button className="mt-4 px-5 py-2 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white transition-all">
                        {card.button}
                      </button>
                    )}
                  </div>
                </a>
              ))}
          </div>
        </section>

        {/* Products */}
        <section className="mx-auto px-4">
          <ProductList />
        </section>

        {/* Banner + Footer */}
        <div>
          <div
            
          />
          <img src="/Images/banner.png" className="w-full h-full" alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Miniherosection;
