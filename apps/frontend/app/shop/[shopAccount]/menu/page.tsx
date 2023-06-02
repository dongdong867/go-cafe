'use client';

import MenuNavigator from './components/MenuNavigator';
import Menu from './components/Menu/Menu';

import { createContext, useState } from 'react';
import CheckOutModal from './components/Menu/CheckOutModal/Modal';
import PageTitle from '@/components/PageTitle';
import BottomButton from '@/components/Button/BottomButton';
import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

type ShoppingCartContextType = {
  shoppingCart: Dish[];
  setShoppingCart: React.Dispatch<React.SetStateAction<Dish[]>>;
};

const ShoppingCart = createContext<ShoppingCartContextType>({
  shoppingCart: [],
  setShoppingCart: () => {},
});
export { ShoppingCart };

const query = gql`
  query Menu($storeAccount: String!) {
    menu(storeAccount: $storeAccount) {
      categoryName
      dishes {
        dishName
        price
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
  const { data }: { data: { menu: Menu[] } } = useSuspenseQuery(query, {
    variables: {
      storeAccount: decodeURIComponent(params.shopAccount),
    },
  });

  if (data.menu.length === 0) return <div>no menu found</div>;

  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkOut, setCheckOut] = useState(false);

  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto space-y-4 relative">
        <ShoppingCart.Provider value={{ shoppingCart, setShoppingCart }}>
          <PageTitle title="Menu" />
          <MenuNavigator
            categoryNameList={data.menu.map(
              (category) => category.categoryName
            )}
          />
          <Menu categories={data.menu} />
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
