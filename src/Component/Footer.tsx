import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      {/* 🔹 Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">E-Shop</h2>
          <p className="mt-3 text-gray-300 text-sm">
            Your one-stop shop for all your fashion, electronics, and lifestyle
            needs. Affordable prices, fast delivery, and quality products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li><a href="/products" className="hover:text-orange-400">Products</a></li>
            <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-400">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Return Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-orange-400" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-orange-400" /> support@eshop.com
            </li>
            <li className="flex gap-4 mt-3">
              <Link href="#" className="hover:text-orange-400"><Facebook /></Link>
              <Link href="#" className="hover:text-orange-400"><Instagram /></Link>
              <Link href="#" className="hover:text-orange-400"><Twitter /></Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="bg-gray-900 text-center py-4 text-gray-400 text-sm">
        © 2025 E-Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
