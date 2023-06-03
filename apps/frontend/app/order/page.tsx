import { getClient } from '@/../lib/client';
import PageTitle from '@/components/PageTitle';
import { gql } from '@apollo/client';
import OrderModal from './components/OrderModal';

const query = gql`
  query Order {
    order {
      id
      customerId
      dishes {
        name
        price
        count
      }
      finished
      tableNumber
      totalPrice
    }
  }
`;

const OrderPage = async () => {
  const client = getClient();
  const { data } = await client.query({ query });

  return (
    <div className="w-full max-w-lg max-[450px]:w-11/12 h-full m-auto space-y-4">
      <PageTitle title="Order Lists" />
      {data.order.map((order) => (
        <OrderModal order={order} key={order.id} />
      ))}
      <div className="w-full h-2" />
    </div>
  );
};

export default OrderPage;
