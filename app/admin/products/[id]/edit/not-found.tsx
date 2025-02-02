import Link from 'next/link';
import Heading from '@/components/ui/Heading';

function NotFound() {
  return (
    <div className='text-center'>
      <Heading>Producto no encontrado</Heading>
      <Link
        href='/admin/products'
        className='bg-amber-800 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto'
      >
        Ir a Productos
      </Link>
    </div>
  );
}

export default NotFound;
