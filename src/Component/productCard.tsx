import React from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const imgSrc = product.images && product.images.length > 0 ? product.images[0] : "";

  return (
    <div className=" p-4 rounded-lg shadow hover:shadow-lg flex flex-col">
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-lg object-contain mb-4"
        />
      ) : (
        <div className="w-[300px] h-[300px] bg-gray-200 mb-4 flex items-center justify-center rounded-lg">
          Image not available
        </div>
      )}
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-orange-500 font-bold mb-4">${product.price}</p>
      <Link href={`/products/${product.id}`}>
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
