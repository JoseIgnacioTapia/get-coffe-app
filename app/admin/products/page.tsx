import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import ProductTable from '@/components/products/ProductsTable';
import ProductsPagination from '@/components/products/ProductsPagination';

async function productCount() {
  return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true,
    },
  });

  return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = +searchParams.page || 1;
  const pageSize = 10;

  const productsData = await getProducts(page, pageSize);
  const totalProductsData = await productCount();
  const [products, totalProducts] = await Promise.all([
    productsData,
    totalProductsData,
  ]);
  const totalPages = Math.ceil(totalProducts / pageSize);
  console.log(totalPages);

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <ProductTable products={products} />

      <ProductsPagination page={page} totalPages={totalPages} />
    </>
  );
}

export default ProductsPage;
