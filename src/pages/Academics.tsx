import React from 'react';
import { BookOpen, Users, Trophy, Calendar } from 'lucide-react';

function Academics() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Academic Excellence</h1>
          <p className="text-xl max-w-2xl">Our comprehensive curriculum ensures holistic development of every student.</p>
        </div>
      </div>

      {/* Curriculum Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Our Curriculum</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#003366] mb-6">Nursery Section</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>English Language</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>Mathematics</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>Basic Science</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>Islamic Studies</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>Creative Arts</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#003366] mb-6">Primary Section</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>English Language</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>Mathematics</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>Social Studies</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>Quranic Studies</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-[#4CAF50]" size={20} />
                <span>Arabic Language</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Extra-curricular Activities */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Extra-curricular Activities</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Sports</h3>
              <p className="text-[#333333]">Football, Athletics, and more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#003366]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Debate Club</h3>
              <p className="text-[#333333]">Developing public speaking skills</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Quranic Recitation</h3>
              <p className="text-[#333333]">Mastering Quranic recitation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Art Club</h3>
              <p className="text-[#333333]">Exploring creativity through art</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Calendar */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Academic Calendar</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#003366] mb-4">First Term</h3>
              <ul className="space-y-3">
                <li>Term Begins: September 11, 2024</li>
                <li>Mid-Term Break: October 20-24, 2024</li>
                <li>Term Ends: December 15, 2024</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#003366] mb-4">Second Term</h3>
              <ul className="space-y-3">
                <li>Term Begins: January 8, 2025</li>
                <li>Mid-Term Break: February 15-19, 2025</li>
                <li>Term Ends: April 5, 2025</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
              Download Full Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;