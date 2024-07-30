import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import ProductTable from '@/components/products/ProductsTable';

async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <ProductTable products={products} />
    </>
  );
}

export default ProductsPage;
