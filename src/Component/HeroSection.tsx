"use client";

import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-amber-100 via-white to-amber-50 flex items-center justify-center px-6 py-16">
      {/* Background Blur Circles */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text + Cards */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Accessories <br />
            <span className="text-amber-700">The Best For You</span>
          </h1>
          <p className="text-gray-600 max-w-md">
            Discover the rich style. Handcrafted with love, just for you.
          </p>
          <div className="flex gap-6 mt-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-4 w-40">
              <Image
                src="/image/image 3.jpg"
                alt="Latte"
                width={200}
                height={200}
                className="rounded-xl"
              />
              <p className="mt-2 font-semibold text-center">Gold</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-4 w-40">
              <Image
                src="/image/image-1.jpg"
                alt="Cappuccino"
                width={200}
                height={200}
                className="rounded-xl"
              />
              <p className="mt-2 font-semibold text-center">Jewellery</p>
            </div>
          </div>
        </div>

        {/* Right Side - Cards */}
        <div className="flex flex-col gap-6 items-end">
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 w-52">
            <Image
              src="/image/image-13.jpg"
              alt="Mocha"
              width={250}
              height={250}
              className="rounded-xl"
            />
            <p className="mt-2 font-semibold text-center"></p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 w-52">
            <Image
              src="/image/iamge 11.jpg"
              alt="Espresso"
              width={250}
              height={250}
              className="rounded-xl"
            />
            <p className="mt-2 font-semibold text-center"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
