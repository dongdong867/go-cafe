'use client';

import InputModal from '@/components/Input/InputModal';
import EditPicture from './Picture';
import EditRating from './Rating';
import { MdLocationOn } from 'react-icons/md';
import BottomButton from '@/components/Button/BottomButton';
import TextArea from '@/components/Input/TextArea';

type Props = {
  // shop name
  shopName?: string;
  shopNameDisabled?: boolean;
  setShopName?: React.Dispatch<React.SetStateAction<string>>;
  // rating
  rating?: Rating;
  setRate: (rateName: string, rateValue: number) => void;
  // post body
  postBody?: string;
  setPostBody: React.Dispatch<React.SetStateAction<string>>;
  // picture
  originPicture?: string[];
  pictureList: File[];
  deletedPicture?: string[];
  setPictureList: React.Dispatch<React.SetStateAction<File[]>>;
  setDeletedPicture?: React.Dispatch<React.SetStateAction<string[]>>;
  // submit
  onSubmit: () => void;
};

const EditModal = ({
  // shop name
  shopName = '',
  shopNameDisabled = false,
  setShopName = () => {},
  // rating
  rating = {
    general: 5,
    environment: 5,
    meals: 5,
    attitude: 5,
  },
  setRate,
  // post body
  postBody = '',
  setPostBody,
  // picture
  originPicture = [],
  pictureList,
  deletedPicture = [],
  setPictureList,
  setDeletedPicture = undefined,
  // submit
  onSubmit,
}: Props) => {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <>
      <div className="text-lg font-medium space-y-4">
        <EditPicture
          originPicture={originPicture}
          pictureList={pictureList}
          deletedPicture={deletedPicture}
          setPictureList={setPictureList}
          setDeletedPicture={setDeletedPicture}
        />

        <InputModal
          disabled={shopNameDisabled}
          topLabelText="Select a coffee shop"
          sideLabel={<MdLocationOn />}
          value={shopName}
          setValue={setShopName}
        />

        <EditRating rating={rating} setRate={setRate} />

        <TextArea postBody={postBody} setPostBody={setPostBody} />
      </div>
      <div className="w-full h-24" />
      <BottomButton onClick={handleSubmit}>
        <span>post</span>
      </BottomButton>
    </>
  );
};

export default EditModal;
