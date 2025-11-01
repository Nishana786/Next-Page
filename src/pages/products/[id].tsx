"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
        className="rounded-lg mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-green-700 font-bold text-xl mt-3">${product.price}</p>

      <button
        className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition"
        onClick={() =>
          product &&
          dispatch(
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.thumbnail,
              quantity: 1,
            })
          )
        }
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}
