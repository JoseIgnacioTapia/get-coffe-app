import { prisma } from '@/src/lib/prisma';

async function getCategories() {
  const categories = await prisma.category.findMany();

  return categories;
}

async function OrderSidebar() {
  const categories = await getCategories();
  console.log(categories);

  return <aside className='md:w-72 md:h-screen bg-white'>OrderSidebar</aside>;
}

export default OrderSidebar;
