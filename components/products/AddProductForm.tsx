'use client';
import { ProductSchema } from '@/src/schema';
import { toast } from 'react-toastify';
import { createProduct } from '@/actions/create-product-actions';
import { useRouter } from 'next/navigation';

function AddProductForm({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId: parseInt(formData.get('categoryId') as string, 10),
      image: formData.get('image'),
    };
    const result = ProductSchema.safeParse(data);
    console.log(result);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    const response = await createProduct(result.data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    toast.success('Producto creado correctamente');
    router.push('/admin/products');
  };

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto'>
      <form className='space-y-5' action={handleSubmit}>
        {children}

        <input
          type='submit'
          className='bg-amber-800 hover:bg-amber-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
        />
      </form>
    </div>
  );
}

export default AddProductForm;
