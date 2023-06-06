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

  if (data.menu.length === 0)
    return (
      <div className="w-full h-[calc(100vh-150px)] flex flex-col justify-center place-items-center space-y-8 font-bold text-xl">
        <div className="flex place-items-center">
          <div>404</div>
          <div className="divider divider-horizontal h-8 flex place-self-center" />
          <div className="">no menu found</div>
        </div>
        <button
          onClick={router.back}
          className="btn btn-primary text-white text-xl"
        >
          back to shop page
        </button>
      </div>
    );

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