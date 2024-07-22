import { prisma } from '@/src/lib/prisma';
import CategoryIcon from '../ui/CategoryIcon';

async function getCategories() {
  const categories = await prisma.category.findMany();

  return categories;
}

async function OrderSidebar() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <aside className='md:w-72 md:h-screen bg-white'>
      {categories.map((category) => (
        <CategoryIcon key={category.id} category={category} />
      ))}
    </aside>
  );
}

export default OrderSidebar;
