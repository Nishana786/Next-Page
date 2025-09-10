'use client'; // ✅ build സമയത്ത് pre-render ഒഴിവാക്കാൻ

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error('Error fetching product:', err));
    }
  }, [id]);

  if (!id) return <div className="p-6">Product ID ലഭ്യമായില്ല.</div>;
  if (!product) return <div className="p-6">Product load ആകുന്നു...</div>;

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
      <p className="text-green-700 font-bold text-xl mt-3">₹{product.price}</p>
    </div>
  );
}
