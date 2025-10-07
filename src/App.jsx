import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Combine from './Components/Combine';
import Womens from './Components/Women';
import Mens from './Components/Men';
import ProductDetail from './Components/ProductDetail';
import CheckoutPage from './Components/CheckoutPage';
import Unisex from './Components/Unisex';
import SpecialOffers from './Components/SpecialOffer';
import LoginPage from './Components/LoginPage';
import CartDrawer from './Components/CartDrawer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Combine />} />

        {/* Category Pages */}
        <Route path="/women" element={<Womens />} />
        <Route path="/man" element={<Mens />} />
        <Route path="/unisex" element={<Unisex/>} />
        <Route path="/offers" element={<SpecialOffers/>} />

        {/* Product Detail (shared by both Women & Men) */}
        <Route path="/product/:id" element={<ProductDetail />} />
        
        <Route path="/Checkout" element={<CheckoutPage/>}/>
<Route path="/login" element={<LoginPage />} />
<Route path="/Cart" element={<CartDrawer/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
