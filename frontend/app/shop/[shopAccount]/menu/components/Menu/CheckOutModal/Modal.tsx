"use client";

import PageTitle from "@/app/components/PageTitle";
import useSendOrder from "@/app/hooks/useSendOrder";
import { useParams } from "next/navigation";
import { MdClose } from "react-icons/md";
import CheckOutOrderList from "./OrderList";
import CheckOutTableNumber from "./TableNumber";
import { Toaster } from "react-hot-toast";

type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckOutModal = ({ isOpen, setOpen }: Props) => {
  if (!isOpen) return null;

  const params = useParams();

  const {
    tableNumber,
    takeaway,
    setTableNumber,
    setTakeaway,
    submitCheck,
    handleSend,
  } = useSendOrder(params.shopAccount);

  const handleClick = async () => {
    await handleSend();
    setOpen(false);
  };

  return (
    <>
      <div className="w-full h-full fixed -top-4 left-0 pt-10 pb-4 bg-black bg-opacity-30 overflow-y-scroll z-10">
        <div className="w-full h-max max-w-lg m-auto">
          <div className="w-full max-[450px]:w-11/12 bg-base-100 rounded-xl m-auto mt-8 px-8 py-4 max-[450px]:px-6">
            <div className="w-full flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="btn btn-square btn-sm btn-ghost "
              >
                <MdClose className="text-2xl font-semibold" />
              </button>
            </div>
            <PageTitle title="Shopping Cart" />
            <CheckOutOrderList />
          </div>
          <div className="w-full max-[450px]:w-11/12 bg-base-100 rounded-xl m-auto mt-8 px-8 py-4 max-[450px]:px-4 space-y-10">
            <CheckOutTableNumber
              tableNumber={tableNumber}
              takeaway={takeaway}
              setTableNumber={setTableNumber}
              setTakeaway={setTakeaway}
            />
            <button
              disabled={!submitCheck()}
              onClick={handleClick}
              className="btn btn-block btn-primary text-white text-xl"
            >
              send order
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default CheckOutModal;
