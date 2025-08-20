import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import Sustainability from './pages/Sustainability';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-body">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FloatingCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;