"use client";

import React from "react";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react"; // ShoppingCart icon added

type ProductProps = {
  product: {
    id: number;
    title: string;
    price: number;
    images: string[];
    rating?: {
      rate: number;
      count: number;
    };
  };
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const rating = product.rating?.rate || 4; // Default 4 if not available

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition flex flex-col">
      {/* Image */}
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>

      {/* ⭐ Rating */}
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < Math.round(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)} / 5</span>
      </div>

      {/* Price */}
      <p className="text-orange-500 font-bold mb-4">${product.price}</p>

      {/* 🛒 Add to Cart Button */}
      <Link href={`/products/${product.id}`} className="mt-auto">
        <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition shadow-md">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
