'use client';
import React from "react";

const ContactPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-amber-100 via-white to-amber-50 flex items-center justify-center px-6 py-16">
      
      {/* Background Blur Circles */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

      {/* Form Container */}
      <div className="relative w-full max-w-md backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-gray-700 text-sm mb-6 text-center leading-relaxed">
          We’d love to hear from you! Please fill out the form below and we’ll
          get back to you as soon as possible.
        </p>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="w-full p-4 rounded-lg bg-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-600"
            placeholder="Your Comment"
          />
            <input
            type="email"
            className="w-full p-4 rounded-lg bg-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-600"
            placeholder="Your Email Address"
          />
          <input
            type="password"
            className="w-full p-4 rounded-lg bg-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-600"
            placeholder="Password"
          />
          
         
        </div>

        {/* Checkbox */}
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2 accent-amber-500" />
          <label className="text-sm text-gray-700">
            Save my name, email, and website for next time.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 shadow-lg"
        >
          Send Message
        </button>
      </div>
    </section>
  );
};

export default ContactPage;
