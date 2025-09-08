import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { AppDispatch } from "@/redux/store";

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch<AppDispatch>();

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
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

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full md:w-1/2 h-96 object-contain rounded-lg"
        />
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
};

export default ProductDetail;
