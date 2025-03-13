import React from 'react';
import { Calendar, Award, Users, BookOpen } from 'lucide-react';

function News() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">News & Events</h1>
          <p className="text-xl max-w-2xl">Stay updated with the latest happenings at our school.</p>
        </div>
      </div>

      {/* Latest News */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Latest News</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Award className="text-[#4CAF50]" size={24} />
              <h3 className="text-xl font-semibold text-[#003366]">Academic Excellence</h3>
            </div>
            <p className="text-[#333333] mb-4">Our school ranked among the top 10 primary schools in Agege.</p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>October 15, 2024</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Users className="text-[#4CAF50]" size={24} />
              <h3 className="text-xl font-semibold text-[#003366]">Cultural Day Success</h3>
            </div>
            <p className="text-[#333333] mb-4">Annual Cultural Day celebration showcases diversity and talent.</p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>October 10, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="text-[#4CAF50]" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-[#003366]">Parent-Teacher Meeting</h3>
                  <p className="text-sm text-gray-500">November 15, 2024</p>
                </div>
              </div>
              <p className="text-[#333333]">Discuss your child's progress and development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="text-[#4CAF50]" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-[#003366]">Science Fair</h3>
                  <p className="text-sm text-gray-500">November 25, 2024</p>
                </div>
              </div>
              <p className="text-[#333333]">Annual science exhibition showcasing student projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-[#4CAF50]" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-[#003366]">Sports Day</h3>
                  <p className="text-sm text-gray-500">December 5, 2024</p>
                </div>
              </div>
              <p className="text-[#333333]">Annual sports competition and athletic events.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Stay Updated</h2>
          <p className="text-[#333333] mb-8">Subscribe to our newsletter for the latest news and updates.</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#003366]"
            />
            <button className="bg-[#4CAF50] text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;