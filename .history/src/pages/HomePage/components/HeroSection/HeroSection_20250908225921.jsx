// Your HeroSection.jsx file

import React from 'react';
import { useAuth } from '../../../../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import lawyersuit from '../ui/lawyersuit.png';
import LawScaleAnimation from '../ui/lawscaleanimation.jsx';
import lawScaleData from '../ui/lawscale.json';
import './HeroSection.css';

const HeroSection = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background-animation">
        <LawScaleAnimation animationData={lawScaleData} />
      </div>

      <div className="hero-visual-left">
        <img src={lawyersuit} alt="Legal Professional" />
      </div>

      <div className="hero-content-container">
        <div className="hero-text">
          <h1>
            <span className="hero-title-part-1">Navig</span>
            <span className="hero-title-part-2">ate Law with AI</span>
          </h1>
          <div className="hero-cta-group">
            <button className="cta-button primary-cta" onClick={handleClick}>
              {isAuthenticated ? 'Go to Dashboard' : 'Start Your Legal Journey'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;