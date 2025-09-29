import React from 'react';

const fragranceData = [
  {
    name: 'Eau de Lumière',
    tagline: 'Bright. Feminine. Radiant.',
    description: 'A delicate blend of jasmine, pear blossom, and soft musk. Perfect for daytime elegance.',
    notes: ['Jasmine petals', 'Pear blossom', 'White musk'],
    type: 'Eau de Parfum',
    size: '50ml',
    price: '$85',
    image: 'public/Images/p2.jpg',
  },
  {
    name: 'Velvet Noir',
    tagline: 'Bold. Seductive. Mysterious.',
    description: 'A night-inspired fragrance that weaves blackcurrant, rose, and patchouli into a sensual allure.',
    notes: ['Blackcurrant', 'Bulgarian rose', 'Patchouli'],
    type: 'Eau de Parfum',
    size: '100ml',
    price: '$120',
    image: 'public/Images/p3.jpg',
  },
  {
    name: 'Blush Bloom',
    tagline: 'Romantic. Fresh. Effortless.',
    description: 'A graceful bouquet of peony, lychee, and soft woods. Light and graceful, like spring in full bloom.',
    notes: ['Peony', 'Lychee', 'Cedarwood'],
    type: 'Eau de Toilette',
    size: '75ml',
    price: '$65',
    image: 'public/Images/p3.jpg',
  },
  {
    name: 'Rose Dusk',
    tagline: 'Elegant. Warm. Feminine.',
    description: 'A sensual blend of Turkish rose, amber, and vanilla. Ideal for evening allure.',
    notes: ['Turkish rose', 'Amber', 'Vanilla'],
    type: 'Eau de Parfum',
    size: '90ml',
    price: '$99',
    image: 'public/Images/p2.jpg',
  },
  {
    name: 'Citrus Whimsy',
    tagline: 'Fresh. Playful. Zesty.',
    description: 'A refreshing mix of mandarin, grapefruit, and mint. Perfect for summer days.',
    notes: ['Mandarin', 'Grapefruit', 'Mint'],
    type: 'Eau de Toilette',
    size: '60ml',
    price: '$55',
    image: 'public/Images/p2.jpg',
  },
  {
    name: 'Midnight Petals',
    tagline: 'Mysterious. Deep. Enchanting.',
    description: 'A captivating fusion of tuberose, sandalwood, and black pepper.',
    notes: ['Tuberose', 'Sandalwood', 'Black pepper'],
    type: 'Eau de Parfum',
    size: '100ml',
    price: '$110',
    image: 'public/Images/p2.jpg',
  },
];

const FragranceCard = ({ fragrance }) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
    <img src={fragrance.image} alt={fragrance.name} className="w-full h-64 object-cover" />
    <div className="p-5">
      <h2 className="text-xl font-bold text-gray-800 mb-1">{fragrance.name}</h2>
      <p className="italic text-pink-500 mb-2">{fragrance.tagline}</p>
      <p className="text-sm text-gray-600 mb-2">{fragrance.description}</p>
      <p className="text-sm"><strong>Notes:</strong> {fragrance.notes.join(', ')}</p>
      <p className="mt-2 text-sm text-gray-700"><strong>{fragrance.type}</strong> | {fragrance.size} – <strong>{fragrance.price}</strong></p>
      <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
        Add to Cart
      </button>
    </div>
  </div>
);

const FragrancePage = () => (
  <div className="bg-pink-50 min-h-screen py-12 px-6 md:px-16">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-3">🌸 Women’s Fragrance Collection</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Embrace elegance and individuality with our curated scents designed to capture every mood.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {fragranceData.map((fragrance, index) => (
        <FragranceCard key={index} fragrance={fragrance} />
      ))}
    </div>
  </div>
);

export default FragrancePage;
