import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      OrderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return orders;
}

async function OrdersPage() {
  const orders = await getPendingOrders();
  console.log(JSON.stringify(orders, null, 2));

  return (
    <>
      <Heading>Administrar Ordenes</Heading>
    </>
  );
}

export default OrdersPage;
