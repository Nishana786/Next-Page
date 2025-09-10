"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";

// ✅ Product type
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export default function ProductDetail() {
  const { id } = useParams(); 
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data: Product = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      })
    );
    router.push("/cart");
  };

  if (!product) return <p className="p-6 text-gray-500">Loading product...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* ✅ Next.js optimized image */}
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain rounded-lg bg-white"
            priority
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-orange-500 mb-6">
            ${product.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
