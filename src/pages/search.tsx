'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
          // Filtered products strongly typed
          const filtered: Product[] = data.products.filter((p: Product) =>
            p.title.toLowerCase().includes(query)
          );
          setResults(filtered);
        })
        .catch((error) => console.error('Error fetching products:', error));
    }
  }, [query]);

  if (!query) return <div className="p-6">Please enter a search term.</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Search results for: <span className="text-orange-500">{query}</span>
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-3 shadow hover:shadow-lg transition"
            >
              {/*  Added width/height for Next.js <Image /> */}
              <Image
                src={p.thumbnail}
                alt={p.title}
                width={200}
                height={200}
                className="h-32 w-auto object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2 text-center">
                {p.title}
              </h3>
              <p className="text-green-700 font-bold text-center">₹{p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
