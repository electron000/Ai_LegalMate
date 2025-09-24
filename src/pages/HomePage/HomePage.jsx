import React from 'react';
import './HomePage.css';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import HeroCarousel from './components/HeroCarousel/HeroCarousel.jsx';
import FeatureSection from './components/FeatureSection/FeatureSection.jsx';

const HomePage = () => {
  return (
    <div className="homepage">
      <main>
        <HeroSection />
        <HeroCarousel />
        <FeatureSection />
      </main>
    </div>
  );
};

export default HomePage;