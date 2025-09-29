import React from 'react';

export default function Mensperfums() {
  const perfumes = [
    {
      id: 1,
      name: 'Dior Sauvage',
      description: 'Fresh & spicy masculine scent',
      price: 14500,
      size: 100,
      image: 'public/Images/WhatsApp Image 2025-07-08 at 11.13.39 PM - Copy.jpeg',
      hoverImage: 'public/Images/WhatsApp Image 2025-07-08 at 11.13.28 PM.jpeg',
    },
    {
      id: 2,
      name: 'Chanel Bleu',
      description: 'Elegant & woody fragrance',
      price: 17200,
      size: 100,
      image: 'src/assets/chanel.jpg',
      hoverImage: 'src/assets/chanel-hover.jpg',
    },
    {
      id: 3,
      name: 'Creed Aventus',
      description: 'Luxury scent with fruity notes',
      price: 35000,
      size: 100,
      image: 'src/assets/creed.jpg',
      hoverImage: 'src/assets/creed-hover.jpg',
    },
    {
      id: 4,
      name: 'Tom Ford Noir',
      description: 'Sensual & warm oriental fragrance',
      price: 24000,
      size: 100,
      image: 'src/assets/tomford.jpg',
      hoverImage: 'src/assets/tomford-hover.jpg',
    },
    {
      id: 5,
      name: 'YSL La Nuit',
      description: 'Seductive & deep evening wear scent',
      price: 19500,
      size: 100,
      image: 'src/assets/ysl.jpg',
      hoverImage: 'src/assets/ysl-hover.jpg',
    },
    {
      id: 6,
      name: 'Versace Eros',
      description: 'Bold & vibrant masculine fragrance',
      price: 21000,
      size: 100,
      image: 'src/assets/versace.jpg',
      hoverImage: 'src/assets/versace-hover.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black py-10 px-3 sm:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        🖤 Signature Fragrances Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-white text-black rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <div className="w-full h-56 relative group overflow-hidden rounded-t-xl">
              {/* Default image */}
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {/* Hover image */}
              <img
                src={perfume.hoverImage}
                alt={`${perfume.name} Hover`}
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold mb-1">{perfume.name}</h2>
              <p className="text-gray-600 text-sm mb-3">{perfume.description}</p>

              <div className="flex justify-between text-gray-700 text-sm mb-4 px-1 font-medium">
                <span>Rs {perfume.price.toLocaleString()}</span>
                <span>{perfume.size}ml</span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-black text-white py-1.5 rounded-full hover:bg-gray-800 text-sm transition">
                  Buy Now
                </button>
                <button className="flex-1 bg-black text-white py-1.5 rounded-full hover:bg-gray-800 text-sm transition">
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
