'use client';

import PageTitle from 'apps/frontend/app/components/PageTitle';
import categories from 'apps/frontend/public/data/FakeMenuData';
import MenuNavigator from './components/MenuNavigator';
import Menu from './components/Menu/Menu';
import BottomButton from 'apps/frontend/app/components/Button/BottomButton';
import { createContext, useState } from 'react';
import CheckOutModal from './components/Menu/CheckOutModal/Modal';

type ShoppingCartContextType = {
  shoppingCart: Order[];
  setShoppingCart: React.Dispatch<React.SetStateAction<Order[]>>;
};

export const ShoppingCart = createContext<ShoppingCartContextType>({
  shoppingCart: [],
  setShoppingCart: () => {},
});

const ShopMenuPage = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkOut, setCheckOut] = useState(false);

  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto space-y-4 relative">
        <ShoppingCart.Provider value={{ shoppingCart, setShoppingCart }}>
          <PageTitle title="Menu" />
          <MenuNavigator categories={categories} />
          <Menu categories={categories} />
          <div className="w-0 h-20" />
          <BottomButton onClick={() => setCheckOut(true)}>
            <span>check out</span>
          </BottomButton>
          <CheckOutModal isOpen={checkOut} setOpen={setCheckOut} />
        </ShoppingCart.Provider>
      </div>
    </>
  );
};

export default ShopMenuPage;
