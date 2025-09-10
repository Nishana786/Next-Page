'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.products.filter((p: any) =>
            p.title.toLowerCase().includes(query)
          );
          setResults(filtered);
        });
    }
  }, [query]);

  if (!query) return <div className="p-6">Please enter a search term.</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Search results for: {query}</h2>
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((p) => (
            <div key={p.id} className="border rounded p-2">
              <Image src={p.thumbnail} alt={p.title} className="h-32 object-cover mx-auto" />
              <h3 className="text-sm font-semibold mt-2">{p.title}</h3>
              <p className="text-green-700 font-bold">₹{p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
