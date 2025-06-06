import React from 'react';
import { Users, BookOpen, Heart, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function About() {
  return (
    <div>
      <HeroSection
        title="About Our School"
        subtitle="Established in 1995, Hujatul Islam Nursery and Primary School has been a cornerstone of quality education in Sango-Agege."
        backgroundImage="https://i.ibb.co/MkZnH04F/h7.jpg"
      />

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Our Mission</h2>
            <p className="text-[#333333]">To provide a holistic education that nurtures the intellectual, moral, and spiritual growth of every child.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Our Vision</h2>
            <p className="text-[#333333]">To be a leading institution in raising future leaders grounded in Islamic values and academic excellence.</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Faith</h3>
              <p className="text-[#333333]">Grounded in Islamic principles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#003366]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Discipline</h3>
              <p className="text-[#333333]">Building strong character</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Excellence</h3>
              <p className="text-[#333333]">Striving for the best</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Compassion</h3>
              <p className="text-[#333333]">Caring for others</p>
            </div>
          </div>
        </div>
      </div>

      {/* Staff & Management */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Our Leadership</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* <img 
              src="https://i.ibb.co/Cs3xW13X/mmm1.jpg" 
              alt="Managing Director" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            /> */}
            <h3 className="text-xl font-semibold text-[#003366] text-center mb-2">Bashir Mulikat Iyabode</h3>
            <p className="text-[#333333] text-center mb-4">Managing Director/Proprietress</p>
            <p className="text-[#333333] text-center">A visionary leader committed to excellence in Islamic education and academic achievement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* <img 
              src="https://i.ibb.co/XZLkTpt6/mmm2.jpg" 
              alt="Chairman" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            /> */}
            <h3 className="text-xl font-semibold text-[#003366] text-center mb-2">Busari Muhammadbashir</h3>
            <p className="text-[#333333] text-center mb-4">Chairman</p>
            <p className="text-[#333333] text-center">Leading our institution with wisdom and dedication to Islamic values and educational excellence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* <img 
              src="https://i.ibb.co/PZYLjY1M/h2.jpg" 
              alt="Principal" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            /> */}
            <h3 className="text-xl font-semibold text-[#003366] text-center mb-2">Mr. Mustafa Mudathir</h3>
            <p className="text-[#333333] text-center mb-4">Principal</p>
            <p className="text-[#333333] text-center">With over 20 years of experience in education, Mr. Mudathir is dedicated to fostering a love for learning in every child.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* <img 
              src="https://i.ibb.co/PG9B37f3/mmm.jpg" 
              alt="Vice Principal" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            /> */}
            <h3 className="text-xl font-semibold text-[#003366] text-center mb-2">Mr. Muhammad Babajide</h3>
            <p className="text-[#333333] text-center mb-4">Vice Principal</p>
            <p className="text-[#333333] text-center">A dedicated educator with 15 years of experience in Islamic education and academic excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;