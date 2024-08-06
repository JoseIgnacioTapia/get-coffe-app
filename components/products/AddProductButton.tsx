'use client';

import { useStore } from '@/src/store';
import { Product } from '@prisma/client';

type AddProductButtonProps = {
  product: Product;
};

function AddProductButton({ product }: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder);

  return (
    <button
      type='button'
      className='bg-amber-800 hover:bg-amber-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  );
}

export default AddProductButton;
