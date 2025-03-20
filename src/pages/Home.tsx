import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Award, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      title: "Nurturing Young Minds for a Brighter Future",
      subtitle: "Where Excellence Meets Islamic Values"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      title: "Building Strong Character",
      subtitle: "Academic Excellence with Islamic Foundation"
    },
    {
      url: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&q=80",
      title: "Creating Tomorrow's Leaders",
      subtitle: "Quality Education in a Nurturing Environment"
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      title: "Classroom Activities"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      title: "Sports Activities"
    },
    {
      url: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&q=80",
      title: "Cultural Events"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      title: "Science Fair"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      title: "Art Exhibition"
    },
    {
      url: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&q=80",
      title: "Quranic Competition"
    }
  ];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(heroTimer);
  }, []);

  return (
    <div>
      {/* Hero Section with Auto-sliding */}
      <div className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <h1 className="text-5xl font-bold mb-6 text-center animate-fade-in">{slide.title}</h1>
              <p className="text-xl mb-8 max-w-2xl text-center animate-slide-up">{slide.subtitle}</p>
              <div className="flex gap-4 flex-wrap justify-center animate-fade-in">
                <button 
                  onClick={() => navigate('/admissions')}
                  className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => navigate('/about')}
                  className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Quality Education</h3>
            <p className="text-gray-700">Comprehensive curriculum integrating academic excellence with Islamic values</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Expert Teachers</h3>
            <p className="text-gray-700">Dedicated staff committed to nurturing young minds</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Modern Facilities</h3>
            <p className="text-gray-700">State-of-the-art infrastructure for optimal learning</p>
          </div>
        </div>
      </div>

      {/* Gallery Section with Auto-sliding */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Our Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center text-black font-semibold hover:text-gray-700 transition"
            >
              View More Photos <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* News & Updates */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">Latest News & Updates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-black mb-4">2024/2025 Admissions Now Open</h3>
            <p className="text-gray-700 mb-4">Join our community of learners for the upcoming academic session.</p>
            <Link to="/admissions" className="text-black font-semibold flex items-center hover:translate-x-2 transition-transform">
              Learn More <ChevronRight size={20} />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-black mb-4">Academic Excellence Awards</h3>
            <p className="text-gray-700 mb-4">Our students achieved outstanding results in national competitions.</p>
            <Link to="/news" className="text-black font-semibold flex items-center hover:translate-x-2 transition-transform">
              Read More <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;