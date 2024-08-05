'use client';
import useSWR from 'swr';
import { revalidatePath } from 'next/cache';
import OrderCard from '@/components/order/OrderCard';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import { OrderWithProducts } from '@/src/types';

function OrdersPage() {
  const url = '/admin/orders/api';
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 10000,
    revalidateOnFocus: false, // Careful consumes a lot of requests
  });

  if (isLoading) return <p>Cargando...</p>;

  if (data)
    return (
      <>
        <Heading>Administrar Ordenes</Heading>

        {data.length ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
            {data.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className='text-center'>No hay ordenes pendientes</p>
        )}
      </>
    );
}

export default OrdersPage;
