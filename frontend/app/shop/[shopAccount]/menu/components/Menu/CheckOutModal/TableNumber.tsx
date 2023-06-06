"use client";

import InputModal from "@/app/components/Input/InputModal";

type Props = {
  tableNumber: string;
  takeaway: boolean;
  setTableNumber: React.Dispatch<React.SetStateAction<string>>;
  setTakeaway: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckOutTableNumber = ({
  tableNumber,
  takeaway,
  setTableNumber,
  setTakeaway,
}: Props) => {
  return (
    <>
      <div className="space-y-4">
        <InputModal
          topLabelText="Table Number"
          sideLabel={<div className="text-base">No.</div>}
          disabled={takeaway}
          setValue={setTableNumber}
        />
        <label className="join w-max flex space-x-4 cursor-pointer">
          <input
            type="checkbox"
            disabled={tableNumber !== ""}
            onChange={(e) => setTakeaway(e.target.checked)}
            className="checkbox checkbox-primary"
          />
          <div className="join-item text-base font-bold">Takeaway</div>
        </label>
      </div>
    </>
  );
};

export default CheckOutTableNumber;
