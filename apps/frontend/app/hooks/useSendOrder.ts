import { ShoppingCart } from '@/shop/[shopId]/menu/page';
import { useContext, useState } from 'react';

const useSendOrder = () => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCart);

  const [tableNumber, setTableNumber] = useState('');
  const [takeaway, setTakeaway] = useState(false);

  const [error, setError] = useState(null);

  const submitCheck = () => {
    if (shoppingCart.length === 0) return false;

    if (takeaway) {
      return true;
    }

    tableNumber.replace(' ', '');
    if (tableNumber === '') return false;

    return true;
  };

  const handleSend = () => {
    const seat = () => {
      if (takeaway) return 'takeaway';
      return tableNumber;
    };

    const order = {
      shoppingCart: shoppingCart,
      seat: seat(),
    };

    console.log(order);
    setShoppingCart([] as Order[]);
    return;
  };

  return {
    tableNumber,
    takeaway,
    error,
    setTableNumber,
    setTakeaway,
    submitCheck,
    handleSend,
  };
};

export default useSendOrder;
