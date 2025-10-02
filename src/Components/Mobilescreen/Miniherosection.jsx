import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import bannerImg from '../../assets/banner.png';
import bannerVideo from '../../assets/sliderVideo.mp4';
import thumbnail from '../../assets/thumbnail.jpeg';
import thumbnailVideo from '../../assets/thumbnailVideo.mp4';



import Footer from '../Footer';
import Navbar from '../Navbar';
import ProductList from '../Product_list';

const Miniherosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const slideDuration = 12000; // 12 seconds per slide
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const slides = [
    {
      type: 'video',
      src: bannerVideo,
      heading: 'Hello, Summer Saving',
      text: 'Up to 25% off',
      button: null,
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      heading: 'Double This Summer',
      text: 'Buy 1 Get One Free',
      button: 'SHOP NOW',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
      heading: 'Double This Summer',
      text: 'Buy 1 Get 1',
      button: 'SHOP NOW',
    },
  ];

  const categories = [
    { title: "MEN'S PERFUME", image: '/Images/men.jpg', link: '/men' },
    { title: "WOMEN'S PERFUME", image:'/Images/women.jpg', link: '/women' },
    { title: "UNISEX PERFUME", image:'/Images/couple pic.jpg', link: '/unisex' },
  ];

  const boards = [
    {
      type: 'image',
      title: "Ayura – This Is How I Express Myself",
      text: "For the woman who leads with confidence and leaves a lasting impression.",
      src: thumbnail,
      href: "/collections/rasasi",
      button: "BUY NOW",
    },
    {
      type: 'video',
      title: "",
      text: "",
      src: thumbnailVideo,
      href: "",
      button: null,
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

  const handleMediaError = (e, index) => {
    console.error(`Error loading media for slide ${index + 1}:`, e);
  };

  const handleMediaLoad = (index) => {
    console.log(`Media loaded successfully for slide ${index + 1}`);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = (index) => {
    console.log(`Button clicked on slide ${index + 1}`);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    touchEndX.current = null;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      touchEndX.current = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
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
      <section>
        <Navbar />
        <div
          className={`relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-gray-900 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
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
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              {slide.type === 'video' ? (
                <video
                  className="w-full h-full object-cover"
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  onError={(e) => handleMediaError(e, index)}
                  onLoadedData={() => handleMediaLoad(index)}
                />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  onError={(e) => handleMediaError(e, index)}
                  onLoad={() => handleMediaLoad(index)}
                />
              )}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center z-10 opacity-0">
                <p className="text-white text-lg">Media failed to load</p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-40 z-20">
                <h1
                  key={`heading-${index}-${animationKey}`}
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-yellow-500 ${
                    index === currentSlide ? 'animate-slide-up' : ''
                  }`}
                >
                  {slide.heading}
                </h1>
                <p
                  key={`text-${index}-${animationKey}`}
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white ${
                    index === currentSlide ? 'animate-slide-up' : ''
                  }`}
                >
                  {slide.text}
                </p>
                {slide.button && (
                  <button
                    key={`button-${index}-${animationKey}`}
                    className={`px-4 sm:px-6 py-2 bg-yellow-500 text-black font-semibold rounded-2xl hover:bg-yellow-600 hover:text-white hover:scale-105 transition-all duration-300 ${
                      index === currentSlide ? 'animate-slide-up-slow' : ''
                    }`}
                    onClick={() => handleButtonClick(index)}
                  >
                    {slide.button}
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 md:space-x-5 z-30">
            {slides.map((_, index) => (
              <div
                key={index}
                className="relative w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 flex items-center justify-center cursor-pointer"
                onClick={() => handleDotClick(index)}
              >
                <div
                  className={`w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400'
                  }`}
                ></div>
                {index === currentSlide && (
                  <svg
                    className="absolute inset-0 w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="62.8"
                      strokeDashoffset="62.8"
                      className="animate-spin-circle"
                      style={{ animationDuration: `${slideDuration}ms` }}
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
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
              @keyframes spin-circle {
                from { stroke-dashoffset: 62.8; }
                to { stroke-dashoffset: 0; }
              }
              .animate-spin-circle {
                animation: spin-circle linear forwards;
              }
            `}
          </style>
        </div>
      </section>

      <motion.section className="px-4 sm:px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-cinzel text-center mb-12 text-gray-900">
          Explore Now
          <span className="block w-24 h-0.5 bg-gray-900 mx-auto mt-2" />
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map(({ title, image, link }, index) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl overflow-hidden shadow-lg relative ${
                index === 0 ? 'w-96 h-70' : 'w-64 h-64'
              }`}
            >
              <Link to={link} className="block w-full">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                {index === 0 && (
                  <div className="absolute inset-y-0 left-4 flex flex-col justify-center items-start text-white font-bold text-2xl leading-none tracking-tight">
                    {Array.from(title).map((char, i) => (
                      <span key={i} className="transform rotate-90 origin-left">
                        {char}
                      </span>
                    ))}
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute top-3 left-3 right-3 flex justify-between text-white font-bold text-2xl">
                    <span>{title.split(" ")[0]}</span>
                    <span>{title.split(" ")[1]}</span>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                    {title}
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="w-full my-24 sm:my-16 md:my-20 lg:my-2">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">
          {boards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className={`relative flex flex-col justify-end w-full h-full cursor-pointer overflow-hidden ${
                card.type === 'video' ? 'hidden md:block' : ''
              }`}
            >
              {card.type === 'video' ? (
                <>
                  <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={card.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => console.error(`Video error for card ${index + 1}:`, e)}
                    onLoadedData={() => console.log(`Video loaded for card ${index + 1}`)}
                  />
                  <div className="absolute inset-0 bg-red-500 bg-opacity-50 hidden" />
                </>
              ) : (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: card.src ? `url(${card.src})` : 'none' }}
                  />
                  <div className="absolute inset-0 bg-red-500 bg-opacity-50 hidden" />
                </>
              )}
              <div
                className="absolute inset-0 bg-opacity-20 z-1"
                style={{ zIndex: 2, border: '1px solid yellow' }}
              />
              <div className="relative z-2 p-6 sm:p-8 md:p-10">
                {card.title && (
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 mb-4">
                    {card.title}
                  </h2>
                )}
                {card.text && (
                  <p className="text-base sm:text-lg md:text-xl text-white mb-4">{card.text}</p>
                )}
                {card.button && (
                  <button className="px-4 sm:px-6 py-3 bg-white text-black font-normal text-base rounded-lg border border-white hover:bg-yellow-500 hover:text-black transition-all duration-300">
                    {card.button}
                  </button>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <ProductList />
      </section>

      <div>
        <div
          className="w-full mx-auto my-12 sm:my-16 md:my-20 lg:my-24 bg-cover bg-center rounded-lg shadow-lg aspect-[16/9]"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <Footer />
      </div>
    </>
  );
};

export default Miniherosection;
