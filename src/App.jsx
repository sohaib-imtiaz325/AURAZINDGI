import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Herosection from './Components/Herosection';
import ProductDetail from './Components/ProductDetail';
import FragrancePage from './Components/Women'; // Women page
import Mensperfums from './Components/Mensperfume';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/WOMEN" element={<FragrancePage />} />
        <Route path="/Man" element={<Mensperfums />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
