import { notFound } from 'next/navigation';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import GoBackButton from '@/components/ui/GoBackButton';
import EditProductForm from '@/components/products/EditProductForm';
import ProductForm from '@/components/products/ProductForm';

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) {
    notFound();
  }

  return product;
}

async function EditProductsPage({ params }: { params: { id: string } }) {
  const product = await getProductById(+params.id);

  return (
    <>
      <Heading>Editar Producto: {product.name}</Heading>

      <GoBackButton />

      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  );
}

export default EditProductsPage;
