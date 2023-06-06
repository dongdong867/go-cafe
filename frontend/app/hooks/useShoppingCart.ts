import { createContext, useContext } from 'react';

type ShoppingCartContextType = {
  shoppingCart: OrderDish[];
  setShoppingCart: React.Dispatch<React.SetStateAction<OrderDish[]>>;
};

export const ShoppingCart = createContext<ShoppingCartContextType>({
  shoppingCart: [],
  setShoppingCart: () => {},
});

const useShoppingCart = () => {
  return useContext(ShoppingCart);
};

export default useShoppingCart;
