import React from 'react';
import { FileText, CheckCircle, HelpCircle, DollarSign } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function Admissions() {
  return (
    <div>
      <HeroSection
        title="Admissions"
        subtitle="Join our community of learners and begin your journey towards excellence."
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
      />

      {/* Admission Process */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Admission Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-2">Step 1</h3>
            <p className="text-[#333333]">Collect Admission Form</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-[#003366]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-2">Step 2</h3>
            <p className="text-[#333333]">Submit Completed Form</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-2">Step 3</h3>
            <p className="text-[#333333]">Attend Interview</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-2">Step 4</h3>
            <p className="text-[#333333]">Payment & Enrollment</p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Required Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#4CAF50]" size={20} />
                  <span>Birth Certificate</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#4CAF50]" size={20} />
                  <span>Passport Photographs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#4CAF50]" size={20} />
                  <span>Previous School Report (for transfers)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#4CAF50]" size={20} />
                  <span>Immunization Records</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Age Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#4CAF50]" size={20} />
                  <span>Nursery: 2-3 years</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#4CAF50]" size={20} />
                  <span>Reception: 4-5 years</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#4CAF50]" size={20} />
                  <span>Primary 1: 5-6 years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#003366] mb-4">Do you offer scholarships?</h3>
            <p className="text-[#333333]">Yes, we offer merit-based and need-based scholarships to qualified students.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#003366] mb-4">What is the class size?</h3>
            <p className="text-[#333333]">We maintain a maximum of 20 students per class to ensure individual attention.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#003366] mb-4">Is transportation available?</h3>
            <p className="text-[#333333]">Yes, we provide school bus services for various routes in Lagos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#003366] mb-4">What is the admission timeline?</h3>
            <p className="text-[#333333]">Admissions are processed throughout the year, subject to availability.</p>
          </div>
        </div>
      </div>

      {/* Contact for Admissions */}
      <div className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8">Contact our admissions office for more information or to schedule a visit.</p>
          <button className="bg-[#FFD700] text-[#003366] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition">
            Contact Admissions Office
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admissions;