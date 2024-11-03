// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TypesOfJobs from './components/TypesOfJobs';
import Internships from './components/Internships';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import RecentBlogs from './components/RecentBlogs';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Header />
        <HeroSection />
        <TypesOfJobs /> {/* New section */}
        <Internships /> {/* New section */}
        <FeaturesSection />
        <TestimonialsSection />
        <RecentBlogs />
        <Footer />
      </div>
    
  );
}

export default App;
