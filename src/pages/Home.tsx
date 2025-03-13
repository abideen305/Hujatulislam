import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Award, BookOpen, Phone, Mail, MapPin, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      title: "Excellence in Education"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      title: "Islamic Values"
    },
    {
      url: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&q=80",
      title: "Academic Achievement"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center transition-all duration-500" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6 text-center animate-fade-in">Nurturing Young Minds for a Brighter Future</h1>
          <p className="text-xl mb-8 max-w-2xl text-center animate-slide-up">Welcome to Hujatul Islam Nursery and Primary School, where excellence meets Islamic values</p>
          <div className="flex gap-4 flex-wrap justify-center animate-fade-in">
            <button 
              onClick={() => navigate('/admissions')}
              className="bg-[#FFD700] text-[#003366] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Admissions Open
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#003366] text-white px-6 py-3 rounded-full font-semibold border-2 border-white hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Contact Us
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Slider */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center animate-fade-in">Our Gallery</h2>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 transform ${
                index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">{slide.title}</h3>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronLeft className="text-[#003366]" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronRight className="text-[#003366]" size={24} />
          </button>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/gallery"
            className="inline-flex items-center text-[#003366] font-semibold hover:text-[#4CAF50] transition transform hover:translate-x-2"
          >
            View More Photos <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Welcome to Our School</h2>
          <p className="text-[#333333] max-w-3xl mx-auto">
            Welcome to Hujatul Islam Nursery and Primary School, where we provide a nurturing environment for children to grow academically, morally, and spiritually. Located in the heart of Sango-Agege, we are committed to excellence in education and character development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-2">Quality Education</h3>
            <p className="text-[#333333]">Comprehensive curriculum integrating academic excellence with Islamic values</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
              <Award className="text-[#003366]" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-2">Expert Teachers</h3>
            <p className="text-[#333333]">Dedicated staff committed to nurturing young minds</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-2">Modern Facilities</h3>
            <p className="text-[#333333]">State-of-the-art infrastructure for optimal learning</p>
          </div>
        </div>
      </div>

      {/* News & Updates */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">News & Updates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F5F5] p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">Admissions Open</h3>
              <p className="text-[#333333] mb-4">Admissions for the 2024/2025 academic session are now open!</p>
              <Link to="/admissions" className="text-[#4CAF50] font-semibold flex items-center hover:translate-x-2 transition-transform">
                Learn More <ChevronRight size={20} />
              </Link>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">Recent Achievement</h3>
              <p className="text-[#333333] mb-4">Our students won 1st place in the inter-school Quranic competition.</p>
              <Link to="/news" className="text-[#4CAF50] font-semibold flex items-center hover:translate-x-2 transition-transform">
                Read More <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#003366]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p>+234 802 626 3515</p>
                <p>+234 904 542 5080</p>
              </div>
            </div>
            <div className="flex items-center gap-4 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#003366]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p>info@hujatulislamschool.com.ng</p>
              </div>
            </div>
            <div className="flex items-center gap-4 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#003366]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p>16, Ekerin Street, Moshalshi Alhaja, Sango - Agege, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;