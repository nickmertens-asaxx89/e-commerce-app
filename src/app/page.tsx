import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        My E-Commerce Store
      </h1>

      <Link
        href="/products"
        className="bg-black text-white px-4 py-2 rounded"
      >
        View Products
      </Link>
    </main>
  );
}