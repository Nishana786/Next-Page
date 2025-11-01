"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/Component/productCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const searchQuery = useSelector((state: RootState) => state.search.query);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0
          ? filteredProducts.map(p => <ProductCard key={p.id} product={p} />)
          : <p>No products found</p>}
      </div>
    </div>
  );
};

export default ProductsPage;
