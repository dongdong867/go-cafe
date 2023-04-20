'use client';

import EditPicture from './EditModal/EditPicture';
import EditCoffeeShop from './EditModal/EditCoffeeShop';
import EditRanking from './EditModal/EditRanking';
import EditBody from './EditModal/EditBody';

type Props = {
  buttonContent: string;
  // shop name
  shopName?: string;
  shopNameDisabled?: boolean;
  setShopName: React.Dispatch<React.SetStateAction<string>>;
  // rating
  generalRate?: number;
  environmentRate?: number;
  mealsRate?: number;
  attitudeRate?: number;
  setGeneralRate: React.Dispatch<React.SetStateAction<number>>;
  setEnvironmentRate: React.Dispatch<React.SetStateAction<number>>;
  setMealsRate: React.Dispatch<React.SetStateAction<number>>;
  setAttitudeRate: React.Dispatch<React.SetStateAction<number>>;
  // post body
  postBody?: string;
  setPostBody: React.Dispatch<React.SetStateAction<string>>;
  // submit
  onSubmit: () => void;
};

const EditModal = ({
  buttonContent,
  // shop name
  shopName = '',
  shopNameDisabled = false,
  setShopName,
  // rating
  generalRate = 5,
  environmentRate = 5,
  mealsRate = 5,
  attitudeRate = 5,
  setGeneralRate,
  setEnvironmentRate,
  setMealsRate,
  setAttitudeRate,
  // post body
  postBody = '',
  setPostBody,
  // submit
  onSubmit,
}: Props) => {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <>
      <div className="text-lg font-medium space-y-4">
        <EditPicture />

        <EditCoffeeShop
          disabled={shopNameDisabled}
          shopName={shopName}
          setShopName={setShopName}
        />

        <EditRanking
          generalRate={generalRate}
          environmentRate={environmentRate}
          mealsRate={mealsRate}
          attitudeRate={attitudeRate}
          setGeneralRate={setGeneralRate}
          setEnvironmentRate={setEnvironmentRate}
          setMealsRate={setMealsRate}
          setAttitudeRate={setAttitudeRate}
        />

        <EditBody postBody={postBody} setPostBody={setPostBody} />
      </div>
      <div className="w-full sticky bottom-0 bg-base-100 py-4">
        <button
          onClick={handleSubmit}
          className="btn btn-block btn-primary text-xl text-base-100"
        >
          {buttonContent}
        </button>
      </div>
    </>
  );
};

export default EditModal;
