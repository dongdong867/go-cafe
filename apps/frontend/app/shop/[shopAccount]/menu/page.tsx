'use client';

import MenuNavigator from './components/MenuNavigator';
import Menu from './components/Menu/Menu';

import { createContext, useState } from 'react';
import CheckOutModal from './components/Menu/CheckOutModal/Modal';
import PageTitle from '@/components/PageTitle';
import BottomButton from '@/components/Button/BottomButton';
import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import useToast from '@/hooks/useToast';

type ShoppingCartContextType = {
  shoppingCart: Order[];
  setShoppingCart: React.Dispatch<React.SetStateAction<Order[]>>;
};

const ShoppingCart = createContext<ShoppingCartContextType>({
  shoppingCart: [],
  setShoppingCart: () => {},
});
export { ShoppingCart };

const query = gql`
  query Menu($storeAccount: String!) {
    menu(storeAccount: $storeAccount) {
      categories {
        name
        dishes {
          name
          price
        }
      }
    }
  }
`;

type Props = {
  params: {
    shopAccount: string;
  };
};

const ShopMenuPage = ({ params }: Props) => {
  const { data }: { data: Menu } = useSuspenseQuery(query, {
    variables: {
      storeAccount: decodeURIComponent(params.shopAccount),
    },
  });

  useToast('test', 'error');

  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkOut, setCheckOut] = useState(false);

  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto space-y-4 relative">
        <ShoppingCart.Provider value={{ shoppingCart, setShoppingCart }}>
          <PageTitle title="Menu" />
          <MenuNavigator categories={data.menu.categories} />
          <Menu categories={data.menu.categories} />
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
