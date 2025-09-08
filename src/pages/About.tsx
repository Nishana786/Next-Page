'use client';
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-amber-100 via-white to-amber-50 flex items-center justify-center px-6 py-16">
      
      {/* Background Blur Circles */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-10 backdrop-blur-lg bg-white/30 p-10 rounded-2xl shadow-2xl border border-white/20">
        
      

        {/* Right Side - Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to our e-commerce store! We are committed to providing
            high-quality products at affordable prices.
            <br /><br />
            Our mission is to make online shopping easy, secure, and enjoyable
            for everyone. We work with reliable suppliers and ensure each
            product meets our quality standards.
            <br /><br />
            Thank you for visiting our store. Happy shopping!
          </p>
          <button
            onClick={() => alert("Thanks for visiting!")}
            className="px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition duration-300"
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
