import React from 'react';
import './HomePage.css'; // ADDED
import HeroSection from './components/HeroSection/HeroSection.jsx';
import HeroCarousel from './components/HeroCarousel/HeroCarousel.jsx';
import FeatureSection from './components/FeatureSection/FeatureSection.jsx';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* REMOVED inner homepage-background div */}
      <main>
        <HeroSection />
        <HeroCarousel />
        <FeatureSection />
      </main>
    </div>
  );
};

export default HomePage;