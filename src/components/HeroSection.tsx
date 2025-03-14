import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <div 
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}

export default HeroSection;