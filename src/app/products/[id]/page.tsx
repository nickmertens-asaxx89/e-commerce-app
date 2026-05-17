import { products } from "@/data/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
        {product.name}
      </h1>

      <p className="text-2xl mt-4">
        ${product.price}
      </p>

      <p className="mt-6 text-gray-600">
        {product.description}
      </p>
    </main>
  );
}