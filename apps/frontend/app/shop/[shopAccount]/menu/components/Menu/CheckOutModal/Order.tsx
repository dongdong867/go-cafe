'use client';

import { useContext, useState } from 'react';
import { useShoppingCart } from '../../../page';

type Props = {
  order: OrderDish;
};

const CheckOutOrder = ({ order }: Props) => {
  const [open, setOpen] = useState(false);

  const { shoppingCart, setShoppingCart } = useShoppingCart();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setShoppingCart(
      shoppingCart.filter((cartItem) => cartItem.name !== order.name)
    );
  };

  const EditButton = (
    <div className="w-full flex justify-end space-x-2 py-2">
      <button onClick={handleDelete} className="btn btn-error text-white">
        delete
      </button>
      <button onClick={handleClose} className="btn btn-primary text-white">
        cancel
      </button>
    </div>
  );

  return (
    <>
      <div className="btn btn-ghost w-full h-max">
        <button onClick={() => setOpen(true)} className="w-full h-max py-2">
          <div className="w-full justify-between space-x-20 font-bold text-lg max-[450px]:text-base">
            <div className="flex space-x-4">
              <div className="w-2/3 text-left">{order.name}</div>
              <div className="flex w-1/3 justify-between">
                <div>X{order.count}</div>
                <div>${order.price}</div>
              </div>
            </div>
          </div>
        </button>
        {open && EditButton}
      </div>
    </>
  );
};

export default CheckOutOrder;
