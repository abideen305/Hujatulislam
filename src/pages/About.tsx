import React from 'react';
import { Users, BookOpen, Heart, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function About() {
  return (
    <div>
      <HeroSection
        title="About Our School"
        subtitle="Established in 1995, Hujatul Islam Nursery and Primary School has been a cornerstone of quality education in Sango-Agege."
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
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
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" 
              alt="Principal" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#003366] text-center mb-2">Mrs. Aisha Adeyemi</h3>
            <p className="text-[#333333] text-center mb-4">Principal</p>
            <p className="text-[#333333] text-center">With over 20 years of experience in education, Mrs. Adeyemi is dedicated to fostering a love for learning in every child.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=400&h=400" 
              alt="Vice Principal" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#003366] text-center mb-2">Mr. Ibrahim Hassan</h3>
            <p className="text-[#333333] text-center mb-4">Vice Principal</p>
            <p className="text-[#333333] text-center">A dedicated educator with 15 years of experience in Islamic education and academic excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;