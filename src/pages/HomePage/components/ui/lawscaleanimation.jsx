import React from 'react';
import Lottie from 'lottie-react';
import lawScaleAnimationData from './lawscale.json'; // Importing the animation data

/**
 * A React component to display the law scale Lottie animation.
 * This component is self-contained and can be easily customized with props.
 */
const LawScaleAnimation = ({ width = 400, height = 350 }) => {
  // Style object for the container div to center the animation
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  };

  // Style object for the Lottie animation itself
  const animationStyle = {
    width: width,
    height: height,
  };

  return (
    <div style={containerStyle}>
      <Lottie
        animationData={lawScaleAnimationData}
        loop={true}      // The animation will loop continuously
        autoplay={true}   // The animation will play automatically on load
        style={animationStyle}
      />
    </div>
  );
};

export default LawScaleAnimation;