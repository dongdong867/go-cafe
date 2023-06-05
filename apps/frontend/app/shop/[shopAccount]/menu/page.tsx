'use client';

import MenuNavigator from './components/MenuNavigator';
import Menu from './components/Menu/Menu';
import { useState } from 'react';
import CheckOutModal from './components/Menu/CheckOutModal/Modal';
import PageTitle from '@/components/PageTitle';
import BottomButton from '@/components/Button/BottomButton';
import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { ShoppingCart } from '@/hooks/useShoppingCart';
import { useRouter } from 'next/navigation';

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
  const { data }: { data: { menu: Menu } } = useSuspenseQuery(query, {
    variables: {
      storeAccount: decodeURIComponent(params.shopAccount),
    },
  });

  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkOut, setCheckOut] = useState(false);

  const router = useRouter();

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
