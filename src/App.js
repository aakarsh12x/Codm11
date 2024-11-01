// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import RecentBlogs from './components/RecentBlogs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <RecentBlogs />
      <Footer />
    </div>
  );
}

export default App;
