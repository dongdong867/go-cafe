'use client';
import { useContext, useState } from 'react';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { ShoppingCart } from '../../../page';

type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  item: {
    name: string;
    price: number;
  };
};

const CommodityOrderModal = ({ quantity, setQuantity, item }: Props) => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCart);

  const handleClick = () => {
    const order = {
      item: item,
      quantity: quantity,
    };

    setShoppingCart([...shoppingCart, order]);
  };

  return (
    <>
      <div className="modal modal-middle max-[450px]:modal-bottom">
        <div className="modal-box w-full max-w-lg p-8 flex flex-col place-items-center space-y-12 max-[450px]:w-full">
          <div className="w-full flex justify-around max-[450px]:justify-between text-3xl">
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
          <div className="btn-group">
            <button
              disabled={quantity === 1}
              onClick={() => setQuantity((e) => e - 1)}
              className="btn btn-primary text-white"
            >
              <FaMinus />
            </button>
            <div className="w-16 flex justify-center place-items-center border-2 border-primary">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity((e) => e + 1)}
              className="btn btn-primary text-white"
            >
              <FaPlus />
            </button>
          </div>
          <div className="modal-action w-5/6 max-[450px]:w-full">
            <label
              htmlFor={item.name}
              onClick={() => handleClick()}
              className="btn btn-primary btn-block justify-around text-white text-lg"
            >
              <div>Add to cart</div>
              <div className="flex place-items-center space-x-2">
                <FaShoppingCart />
                <span>{item.price * quantity}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommodityOrderModal;
