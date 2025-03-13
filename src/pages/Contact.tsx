import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">Get in touch with us for any inquiries or information.</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#003366] mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#003366]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366] mb-1">Phone</h3>
                  <p>+234 802 626 3515</p>
                  <p>+234 904 542 5080</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#003366]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366] mb-1">Email</h3>
                  <p>info@hujatulislam.sch.ng</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#003366]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366] mb-1">Address</h3>
                  <p>16, Ekerin Street, Moshalshi Alhaja,</p>
                  <p>Sango - Agege, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#003366]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366] mb-1">Office Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#003366] mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366]"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#003366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Our Location</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-[#333333]">Map will be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;