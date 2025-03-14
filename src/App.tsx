import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { School, Menu, X, Mail } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import TawkChat from './components/TawkChat';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on route change
  const handleLinkClick = () => {
    closeMenu();
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F5F5F5]">
        {/* Navigation */}
        <nav className="bg-[#003366] text-white py-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                <School size={24} />
                <span className="font-semibold text-lg">Hujatul Islam School</span>
              </Link>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 hover:bg-[#004488] rounded-lg transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-6">
                <Link to="/" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>About Us</Link>
                <Link to="/academics" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>Academics</Link>
                <Link to="/admissions" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>Admissions</Link>
                <Link to="/gallery" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>Gallery</Link>
                <Link to="/news" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>News & Events</Link>
                <Link to="/contact" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>Contact</Link>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
              <div className="flex flex-col gap-4">
                <Link to="/" className="hover:text-[#FFD700] transition py-2" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" className="hover:text-[#FFD700] transition py-2" onClick={handleLinkClick}>About Us</Link>
                <Link to="/academics" className="hover:text-[#FFD700] transition py-2" onClick={handleLinkClick}>Academics</Link>
                <Link to="/admissions" className="hover:text-[#FFD700] transition py-2" onClick={handleLinkClick}>Admissions</Link>
                <Link to="/gallery" className="hover:text-[#FFD700] transition py-2" onClick={handleLinkClick}>Gallery</Link>
                <Link to="/news" className="hover:text-[#FFD700] transition py-2" onClick={handleLinkClick}>News & Events</Link>
                <Link to="/contact" className="hover:text-[#FFD700] transition py-2" onClick={handleLinkClick}>Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#002244] text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/about" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>About Us</Link>
                  <Link to="/admissions" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>Admissions</Link>
                  <Link to="/academics" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>Academics</Link>
                  <Link to="/contact" className="hover:text-[#FFD700] transition" onClick={handleLinkClick}>Contact Us</Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                <p className="mb-2">16, Ekerin Street,</p>
                <p className="mb-2">Moshalshi Alhaja, Sango - Agege,</p>
                <p className="mb-2">Lagos, Nigeria</p>
                <p className="mb-2">+234 802 626 3515</p>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:info@hujatulislam.sch.ng" className="hover:text-[#FFD700] transition">
                    info@hujatulislam.sch.ng
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">School Hours</h3>
                <p className="mb-2">Monday - Friday</p>
                <p className="mb-2">7:30 AM - 3:30 PM</p>
                <p className="mb-2">Office Hours:</p>
                <p>8:00 AM - 4:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-[#FFD700] transition">Facebook</a>
                  <a href="#" className="hover:text-[#FFD700] transition">Twitter</a>
                  <a href="#" className="hover:text-[#FFD700] transition">Instagram</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-center">© 2024 Hujatul Islam Nursery and Primary School. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Tawk.to Chat Widget */}
        <TawkChat />
      </div>
    </Router>
  );
}

export default App;