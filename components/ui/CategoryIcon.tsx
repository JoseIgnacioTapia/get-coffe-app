'use client';
import { Category } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type CategoryIconProps = {
  category: Category;
};

function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams<{ category: string }>();

  return (
    <div
      className={`${
        category.slug === params.category ? 'bg-amber-800' : ''
      } flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className='w-16 h-16 relative'>
        <Image
          fill
          alt='Imagen Categoria'
          src={`/icon_${category.slug}.jpeg`}
        />
      </div>

      <Link href={`/order/${category.slug}`} className='text-xl font-bold'>
        {category.name}
      </Link>
    </div>
  );
}

export default CategoryIcon;
