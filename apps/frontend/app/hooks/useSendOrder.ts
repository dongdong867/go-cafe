import { ShoppingCart } from '@/shop/[shopAccount]/menu/page';
import { gql, useMutation } from '@apollo/client';
import { useParams } from 'next/navigation';
import { useContext, useState } from 'react';
import useToast from './useToast';

const CREATE_ORDER = gql`
  mutation CreateOrder($createOrderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $createOrderInput)
  }
`;

const useSendOrder = () => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCart);

  const params = useParams();

  const [tableNumber, setTableNumber] = useState('');
  const [takeaway, setTakeaway] = useState(false);

  const [createOrder, { data, error }] = useMutation(CREATE_ORDER);

  if (error) {
    useToast(error.message, 'error');
  }

  const submitCheck = () => {
    if (shoppingCart.length === 0) return false;

    if (takeaway) {
      return true;
    }

    if (tableNumber.replace(' ', '') === '') return false;

    return true;
  };

  const seat = () => {
    if (takeaway) return 'takeaway';
    return tableNumber;
  };

  const handleSend = async () => {
    let totalPrice = 0;
    shoppingCart.forEach(
      (order) => (totalPrice += order.dish.price * order.quantity)
    );

    await createOrder({
      variables: {
        createOrderInput: {
          storeAccount: decodeURIComponent(params.shopAccount),
          tableNumber: seat(),
          totalPrice: totalPrice,
          dishes: shoppingCart.map((order) => {
            return {
              name: order.dish.name,
              count: order.quantity,
              price: order.dish.price * order.quantity,
            };
          }),
        },
      },
    });

    setShoppingCart([] as Order[]);
  };

  return {
    tableNumber,
    takeaway,
    setTableNumber,
    setTakeaway,
    submitCheck,
    handleSend,
  };
};

export default useSendOrder;
