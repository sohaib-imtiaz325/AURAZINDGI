import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import bannerImg from "../assets/banner.png";
import bannerVideo from "../assets/sliderVideo.mp4";
import thumbnail from "../assets/thumbnail.jpeg";
import thumbnailVideo from "../assets/thumbnailVideo.mp4";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductList from "./Product_list";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const slideDuration = 12000; // 12 seconds per slide
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Slider content
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

  // Categories with links
  const categories = [
    { title: "MAN'S PERFUME", image: "/Images/men.jpg", link: "/man" },
    { title: "WOMEN'S PERFUME", image: "/Images/women.jpg", link: "/women" },
    { title: "UNISEX PERFUME", image: "/Images/couple pic.jpg", link: "/unisex" },
  ];

  // Board section
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
      title: "",
      text: "",
      src: thumbnailVideo,
      href: "",
      button: null,
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animate heading/text
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => {
      setAnimationKey((prev) => prev + 1);
    }, 50);
  }, [currentSlide]);

  // Touch/drag handling
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
    if (touchStartX.current && touchEndX.current) {
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
      {/* Navbar + Hero Slider */}
      <section>
        <Navbar />
        <div
          className={`relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-gray-900 ${
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
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                <h1
                  key={`heading-${index}-${animationKey}`}
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-yellow-500 ${
                    index === currentSlide ? "animate-slide-up" : ""
                  }`}
                >
                  {slide.heading}
                </h1>
                <p
                  key={`text-${index}-${animationKey}`}
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 ${
                    index === currentSlide ? "animate-slide-up" : ""
                  }`}
                >
                  {slide.text}
                </p>
                {slide.button && (
                  <button
                    key={`button-${index}-${animationKey}`}
                    className={`px-6 py-2 bg-yellow-500 text-black font-semibold rounded-2xl hover:bg-yellow-600 hover:text-white transition-all ${
                      index === currentSlide ? "animate-slide-up-slow" : ""
                    }`}
                  >
                    {slide.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <motion.section className="px-4 sm:px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-gray-900">
          Explore Now
          <span className="block w-24 h-0.5 bg-gray-900 mx-auto mt-2"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map(({ title, image, link }, index) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg relative w-80 h-72"
            >
              <Link to={link} className="block w-full h-full">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-black/30">
                  {title}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Boards Section */}
      <section className="w-full my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">
          {boards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className={`relative flex flex-col justify-end w-full h-full overflow-hidden ${
                card.type === "video" ? "hidden md:block" : ""
              }`}
            >
              {card.type === "video" ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={card.src}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.src})` }}
                ></div>
              )}
              <div className="relative z-10 p-6 sm:p-10 bg-black/40">
                {card.title && (
                  <h2 className="text-4xl font-bold text-yellow-500 mb-4">
                    {card.title}
                  </h2>
                )}
                {card.text && (
                  <p className="text-lg text-white mb-4">{card.text}</p>
                )}
                {card.button && (
                  <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-yellow-500 transition">
                    {card.button}
                  </button>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Product List */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <ProductList />
      </section>

      {/* Banner + Footer */}
      <div>
        <div
          className="w-full mx-auto h-[40vw] sm:h-[35vw] md:h-[30vw] lg:h-[25vw] min-h-[120px] max-h-[300px] my-20 bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${bannerImg})` }}
        ></div>
        <Footer />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideUpSlow {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-up {
            animation: slideUp 0.5s ease-out forwards;
          }
          .animate-slide-up-slow {
            animation: slideUpSlow 0.8s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default HeroSection;
