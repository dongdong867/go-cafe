import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import useShoppingCart from './useShoppingCart';

const CREATE_ORDER = gql`
  mutation CreateOrder($createOrderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $createOrderInput)
  }
`;

const useSendOrder = (shopAccount: string) => {
  const { shoppingCart, setShoppingCart } = useShoppingCart();

  const [tableNumber, setTableNumber] = useState('');
  const [takeaway, setTakeaway] = useState(false);

  const [createOrder] = useMutation(CREATE_ORDER);

  const router = useRouter();

  const submitCheck = () => {
    if (shoppingCart.length === 0) return false;
    if (takeaway) return true;
    if (tableNumber.replace(' ', '') === '') return false;

    return true;
  };

  const handleSend = async () => {
    let totalPrice = 0;
    shoppingCart.forEach((order) => (totalPrice += order.price));

    const create = createOrder({
      variables: {
        createOrderInput: {
          storeAccount: decodeURIComponent(shopAccount),
          tableNumber: takeaway ? 'takeaway' : tableNumber,
          totalPrice: totalPrice,
          dishes: shoppingCart,
        },
      },
    });

    await toast
      .promise(
        create,
        {
          loading: 'Sending...',
          error: (error) => error.message,
          success: 'Order Send',
        },
        {
          className: 'font-bold text-lg',
        }
      )
      .then(() => {
        setShoppingCart([] as OrderDish[]);
        router.push(`/shop/${shopAccount}`);
      });
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
