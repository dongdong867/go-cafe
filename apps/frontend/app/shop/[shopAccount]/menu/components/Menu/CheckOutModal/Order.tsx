'use client';

import { useContext, useState } from 'react';
import { ShoppingCart } from '../../../page';

type Props = {
  order: Order;
};

const CheckOutOrder = ({ order }: Props) => {
  const [open, setOpen] = useState(false);

  const EditButton = () => {
    if (open === false) return null;

    return (
      <div className="w-full flex justify-end space-x-2 py-2">
        <button
          onClick={(e) => handleDelete(e)}
          className="btn btn-error text-white"
        >
          delete
        </button>
        <button
          onClick={(e) => handleClose(e)}
          className="btn btn-primary text-white"
        >
          cancel
        </button>
      </div>
    );
  };

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCart);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen(false);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShoppingCart(
      shoppingCart.filter((cartItem) => cartItem.dish.name !== order.dish.name)
    );
  };

  return (
    <>
      <div className="btn btn-ghost w-full h-max">
        <button onClick={() => setOpen(true)} className="w-full h-max py-2">
          <div className="w-full justify-between space-x-20 font-bold text-lg max-[450px]:text-base">
            <div className="flex space-x-4">
              <div className="w-2/3 text-left">{order.dish.name}</div>
              <div className="flex w-1/3 justify-between">
                <div>X{order.quantity}</div>
                <div>${order.quantity * order.dish.price}</div>
              </div>
            </div>
          </div>
        </button>
        <EditButton />
      </div>
    </>
  );
};

export default CheckOutOrder;
