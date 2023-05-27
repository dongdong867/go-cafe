import { useContext } from 'react';
import CheckOutOrder from './Order';
import { ShoppingCart } from '../../../page';

const CheckOutOrderList = () => {
  const { shoppingCart } = useContext(ShoppingCart);

  const totalPrice = () => {
    let sum = 0;
    shoppingCart.map((order) => {
      sum += order.dish.price * order.quantity;
    });

    return sum;
  };

  return (
    <>
      <div>
        {shoppingCart.map((order) => (
          <CheckOutOrder key={order.dish.name} order={order} />
        ))}
      </div>
      <div className="divider m-0" />
      <div className="font-bold text-2xl text-right pr-2">${totalPrice()}</div>
    </>
  );
};

export default CheckOutOrderList;
