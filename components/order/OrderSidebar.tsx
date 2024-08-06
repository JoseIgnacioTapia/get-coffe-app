import { prisma } from '@/src/lib/prisma';
import CategoryIcon from '../ui/CategoryIcon';
import Logo from '../ui/Logo';

async function getCategories() {
  const categories = await prisma.category.findMany();

  return categories;
}

async function OrderSidebar() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <aside className='md:w-72 md:h-screen bg-gray-300'>
      <Logo />
      <nav className='mt-10'>
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
}

export default OrderSidebar;
