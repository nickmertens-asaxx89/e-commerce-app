"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h2>{item.name}</h2>
                  <p>${item.price} x {item.quantity}</p>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              Total: ${total}
            </h2>
          </div>
        </>
      )}
    </main>
  );
}