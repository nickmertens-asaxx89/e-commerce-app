"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="flex items-center justify-between p-6 border-b">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        Store
      </Link>

      <div className="flex gap-6">
        <Link href="/products">
          Products
        </Link>

        <Link href="/cart">
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
}