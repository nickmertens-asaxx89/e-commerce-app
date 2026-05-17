"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string | null;
};

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <Link href={`/products/${product.id}`}>
        <h2 className="text-xl font-semibold hover:underline">
          {product.name}
        </h2>
      </Link>

      <p className="text-gray-600 mt-2">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}