import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Combine from './Components/Combine';
import Womens from './Components/Women';
import Mens from './Components/Men';
import ProductDetail from './Components/ProductDetail';
import CheckoutPage from './Components/CheckoutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Combine />} />

        {/* Category Pages */}
        <Route path="/women" element={<Womens />} />
        <Route path="/man" element={<Mens />} />

        {/* Product Detail (shared by both Women & Men) */}
        <Route path="/product/:id" element={<ProductDetail />} />
        
        <Route path="Checkout" element={<CheckoutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
