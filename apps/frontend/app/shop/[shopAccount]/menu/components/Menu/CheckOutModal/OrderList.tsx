import CheckOutOrder from './Order';
import useShoppingCart from '@/hooks/useShoppingCart';

const CheckOutOrderList = () => {
  const { shoppingCart } = useShoppingCart();

  const totalPrice = () => {
    let sum = 0;
    shoppingCart.map((order) => {
      sum += order.price;
    });

    return sum;
  };

  return (
    <>
      <div>
        {shoppingCart.map((order) => (
          <CheckOutOrder key={order.name} order={order} />
        ))}
      </div>
      <div className="divider m-0" />
      <div className="font-bold text-2xl text-right pr-2">${totalPrice()}</div>
    </>
  );
};

export default CheckOutOrderList;
