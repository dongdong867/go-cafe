"use server";

import { Suspense } from "react";
import PageTitle from "../components/PageTitle";
import OrderList from "./components/OrderList";
import OrderLoading from "./components/OrderLoading";

const OrderPage = async () => {
  return (
    <div className="w-full max-w-lg max-[450px]:w-11/12 h-full m-auto space-y-4">
      <PageTitle title="Order Lists" />
      <Suspense fallback={<OrderLoading />}>{await OrderList()}</Suspense>
      <div className="w-full h-2" />
    </div>
  );
};

export default OrderPage;
