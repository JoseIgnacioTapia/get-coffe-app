import { prisma } from '@/src/lib/prisma';
import { notFound } from 'next/navigation';

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

async function EditFunctionsPage({ params }: { params: { id: string } }) {
  const product = await getProductById(+params.id);
  console.log(product);

  return <div>page</div>;
}

export default EditFunctionsPage;
