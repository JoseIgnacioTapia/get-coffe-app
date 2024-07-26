import ProductCard from '@/components/products/ProductCard';
import { prisma } from '@/src/lib/prisma';
import Heading from '@/components/ui/Heading';

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });

  return products;
}

async function OrderPage({ params }: { params: { category: string } }) {
  const products = await getProducts(params.category);
  console.log(products);

  return (
    <>
      <Heading>Elige y personaliza tu pedido a continuación</Heading>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default OrderPage;
