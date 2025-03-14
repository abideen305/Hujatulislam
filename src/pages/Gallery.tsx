import React from 'react';
import HeroSection from '../components/HeroSection';

function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      title: "Classroom Activities"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      title: "Sports Day"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      title: "Art Exhibition"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      title: "Graduation Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      title: "Cultural Day"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      title: "Science Fair"
    }
  ];

  return (
    <div>
      <HeroSection
        title="School Gallery"
        subtitle="Capturing moments and memories from our school life."
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
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
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#003366]">{image.title}</h3>
              </div>
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