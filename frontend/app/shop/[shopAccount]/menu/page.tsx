"use client";

import PageTitle from "@/app/components/PageTitle";
import { ShoppingCart } from "@/app/hooks/useShoppingCart";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import BottomButton from "@/app/components/Button/BottomButton";
import CheckOutModal from "./components/Menu/CheckOutModal/Modal";
import { Toaster } from "react-hot-toast";

type Props = {
  params: {
    shopAccount: string;
  };
};

const ShopMenuPage = async ({ params }: Props) => {
  const [shoppingCart, setShoppingCart] = useState([] as OrderDish[]);
  const [checkOut, setCheckOut] = useState(false);

  return (
    <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto space-y-4 relative">
      <PageTitle title="Menu" />
      {!checkOut && (
        <BottomButton onClick={() => setCheckOut(true)}>
          <span>check out</span>
        </BottomButton>
      )}

      <ShoppingCart.Provider value={{ shoppingCart, setShoppingCart }}>
        <Menu shopAccount={params.shopAccount} />
        <div className="w-0 h-20" />
        <CheckOutModal isOpen={checkOut} setOpen={setCheckOut} />
      </ShoppingCart.Provider>
      <Toaster />
    </div>
  );
};

export default ShopMenuPage;
