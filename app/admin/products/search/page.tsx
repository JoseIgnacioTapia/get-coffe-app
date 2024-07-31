import Heading from '@/components/ui/Heading';
import ProductTable from '@/components/products/ProductsTable';
import { prisma } from '@/src/lib/prisma';
import ProductSearchForm from '@/components/products/ProductSearchForm';

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
    include: {
      category: true,
    },
  });

  return products;
}

async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProducts(searchParams.search);

  return (
    <>
      <Heading>Página de búsqueda: {searchParams.search}</Heading>

      <div className='flex flex-col lg:flex-row lg:justify-end gap-5'>
        <ProductSearchForm />
      </div>

      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className='text-center text-lg'>No hay resultados</p>
      )}
    </>
  );
}

export default SearchPage;
