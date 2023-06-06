"use client";

import useShoppingCart from "@/app/hooks/useShoppingCart";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  dish: {
    dishName: string;
    price: number;
  };
};

const CommodityOrderModal = ({ quantity, setQuantity, dish }: Props) => {
  const { shoppingCart, setShoppingCart } = useShoppingCart();

  const handleClick = () => {
    let newOrderItem = true;

    shoppingCart.forEach((order) => {
      if (order.name === dish.dishName) {
        newOrderItem = false;
        order.count += quantity;
        order.price = order.count * dish.price;
      }
    });

    if (newOrderItem) {
      const order: OrderDish = {
        name: dish.dishName,
        price: dish.price * quantity,
        count: quantity,
      };

      setShoppingCart([...shoppingCart, order]);
    }
  };

  return (
    <>
      <div className="modal modal-middle max-[450px]:modal-bottom">
        <div className="modal-box w-full max-w-lg p-8 flex flex-col place-items-center space-y-12 max-[450px]:w-full">
          <div className="w-full flex justify-around max-[450px]:justify-between text-3xl">
            <div>{dish.dishName}</div>
            <div>${dish.price}</div>
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
              htmlFor={dish.dishName}
              onClick={() => handleClick()}
              className="btn btn-primary btn-block justify-around text-white text-lg"
            >
              <div>Add to cart</div>
              <div className="flex place-items-center space-x-2">
                <FaShoppingCart />
                <span>$ {dish.price * quantity}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommodityOrderModal;
