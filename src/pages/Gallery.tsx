import React from 'react';
import HeroSection from '../components/HeroSection';

function Gallery() {
  const images = [
    {
      url: "https://i.ibb.co/MkZnH04F/h7.jpg",
      title: "Classroom Activities"
    },
    {
      url: "https://i.ibb.co/xKNzkvNn/h6.jpg",
      title: "Sports Day"
    },
    {
      url: "https://i.ibb.co/LhrYsqs9/h3.jpg",
      title: "Art Exhibition"
    },
    {
      url: "https://i.ibb.co/Q7g6Dwqs/h4.jpg",
      title: "Graduation Ceremony"
    },
    {
      url: "https://i.ibb.co/MkZnH04F/h7.jpg",
      title: "Cultural Day"
    },
    {
      url: "https://i.ibb.co/xKNzkvNn/h6.jpg",
      title: "Science Fair"
    }
  ];

  return (
    <div>
      <HeroSection
        title="School Gallery"
        subtitle="Capturing moments and memories from our school life."
        backgroundImage="https://i.ibb.co/LhrYsqs9/h3.jpg"
      />

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Virtual Tour</h2>
          <div className="aspect-w-16 aspect-h-9">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-xl text-[#333333]">Virtual tour video coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;