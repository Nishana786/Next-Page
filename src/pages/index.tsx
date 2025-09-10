"use client";
import React from "react";
import Image from "next/image";
import HeroSection from"../Component/HeroSection";


export default function Home() {
  return (
    
      
    
       
    <div>

       <HeroSection/>
 
      <section className="relative bg-gradient-to-r from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Shop the <span className="text-orange-600">Best Deals</span> Online
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Discover trending products with amazing discounts. Your one-stop
              shop for everything stylish and affordable.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-full text-lg shadow-md hover:bg-orange-700 transition">
              Start Shopping
            </button>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <Image
              src="/image/image 7.jpg" 
              alt="Hero Image"
              width={500}
              height={500}
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="grid gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <Image
              src="/image/image 6.jpg" 
              alt="Product"
              width={400}
              height={300}
              className="rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Trending Product 1</h3>
            <p className="text-gray-500">Best quality product at a great price.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <Image
              src="/image/image 5.jpg"
              alt="Product"
              width={400}
              height={300}
              className="rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Trending Product 2</h3>
            <p className="text-gray-500">Latest design for your style.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <Image
              src="/image/image 4.jpg"
              alt="Product"
              width={400}
              height={300}
              className="rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Trending Product 3</h3>
            <p className="text-gray-500">Perfect for everyday use.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <Image
              src="/image/image 9.jpg"
              alt="Product"
              width={400}
              height={300}
              className="rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Trending Product 4</h3>
            <p className="text-gray-500">A must-have in your collection.</p>
          </div>
        </div>
      </section>
      
       
    </div>
  );
}
