'use client';

import InputModal from 'apps/frontend/app/components/Input/InputModal';
import EditBody from './Body';
import EditCoffeeShop from './CoffeeShop';
import EditPicture from './Picture';
import EditRating from './Rating';
import { MdLocationOn } from 'react-icons/md';
import BottomButton from 'apps/frontend/app/components/Button/BottomButton';

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

        <InputModal
          disabled={shopNameDisabled}
          topLabelText="Select a coffee shop"
          sideLabel={<MdLocationOn />}
          setValue={setShopName}
        />

        <EditRating
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
      <div className="w-full h-24" />
      <BottomButton onClick={handleSubmit}>
        <span>post</span>
      </BottomButton>
    </>
  );
};

export default EditModal;
