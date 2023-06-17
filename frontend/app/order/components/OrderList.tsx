import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import OrderModal from "./OrderModal";

type GraphQLType = {
  order: {
    id: string;
    customerId: string;
    dishes: {
      name: string;
      price: number;
      count: number;
    }[];
    finished: boolean;
    tableNumber: string;
    totalPrice: number;
  }[];
};

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

const OrderList = async () => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({ query });

  return data.order.map((order) => <OrderModal order={order} key={order.id} />);
};

export default OrderList;
