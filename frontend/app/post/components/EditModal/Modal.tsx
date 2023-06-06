"use client";

import useSearchShop from "@/app/hooks/useSearchShop";
import EditPicture from "./Picture";
import InputModal from "@/app/components/Input/InputModal";
import { MdLocationOn } from "react-icons/md";
import EditRating from "./Rating";
import TextArea from "@/app/components/Input/TextArea";
import BottomButton from "@/app/components/Button/BottomButton";

type Props = {
  // shop account
  shopAccount?: string;
  shopAccountDisabled?: boolean;
  setShopAccount?: React.Dispatch<React.SetStateAction<string>>;
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
  shopAccount = "",
  shopAccountDisabled = false,
  setShopAccount = () => {},
  // rating
  rating = {
    general: 5,
    environment: 5,
    meals: 5,
    attitude: 5,
  },
  setRate,
  // post body
  postBody = "",
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
  const { query, storeList, setQuery } = useSearchShop();

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

        <div className="dropdown w-full">
          <label tabIndex={0}>
            <InputModal
              disabled={shopAccountDisabled}
              topLabelText="Select a coffee shop"
              sideLabel={<MdLocationOn />}
              value={shopAccountDisabled ? shopAccount : query}
              setValue={setQuery}
            />
          </label>
          {!shopAccountDisabled && (
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full z-10"
            >
              {storeList.map((store) => {
                return (
                  <li key={store.user.account}>
                    <button
                      className="text-left flex justify-between items-center gap-y-0 py-2 min-[450px]:py-0 max-[450px]:flex-col"
                      onClick={() => {
                        setQuery(store.user.account);
                        setShopAccount(store.user.account);
                      }}
                    >
                      <span className="w-full font-bold">
                        @{store.user.account}
                      </span>
                      <span className="w-full font-medium">
                        {store.user.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

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
