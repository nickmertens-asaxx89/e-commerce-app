import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return <p>Error loading products</p>;
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}