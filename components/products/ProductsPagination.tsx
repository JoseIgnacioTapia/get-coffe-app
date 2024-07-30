import Link from 'next/link';

type ProductsPaginationProps = {
  page: number;
};

function ProductsPagination({ page }: ProductsPaginationProps) {
  return (
    <div className='flex justify-center py-10'>
      <Link href={`/admin/products?page=${page + 1}`}>&raquo;</Link>
    </div>
  );
}

export default ProductsPagination;
