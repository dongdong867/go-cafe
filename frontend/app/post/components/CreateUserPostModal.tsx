"use client";

import useSearchShop from "@/app/hooks/useSearchShop";
import InputModal from "@/app/components/Input/InputModal";
import { MdLocationOn } from "react-icons/md";
import TextArea from "@/app/components/Input/TextArea";
import BottomButton from "@/app/components/Button/BottomButton";
import useCreatePost from "@/app/hooks/useCreatePost";
import EditPicture from "./EditModal/Picture";
import EditRating from "./EditModal/Rating";

type Props = {
  postId?: string;
};

const CreateUserPostModal = ({ postId = undefined }: Props) => {
  const {
    rating,
    pictureList,
    setShopAccount,
    setRate,
    setBody,
    setPictureList,
    createPost: onSubmit,
  } = useCreatePost();

  const { query, storeList, setQuery } = useSearchShop();

  return (
    <>
      <div className="text-lg font-medium space-y-4">
        <EditPicture
          pictureList={pictureList}
          setPictureList={setPictureList}
        />

        <div className="dropdown w-full">
          <label tabIndex={0}>
            <InputModal
              topLabelText="Select a coffee shop"
              sideLabel={<MdLocationOn />}
              value={query}
              setValue={setQuery}
            />
          </label>
          {!postId && (
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full z-10"
            >
              {storeList.map((store) => {
                return (
                  <li key={store.user.account}>
                    <button
                      className="
                        text-left 
                        text-base 
                        h-12 max-[450px]:h-16 
                        flex 
                        justify-between 
                        items-center 
                        gap-y-0 
                        py-2 min-[450px]:py-0 
                        max-[450px]:flex-col"
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

        <TextArea postBody={""} setPostBody={setBody} />
      </div>
      <div className="w-full h-24" />
      <BottomButton onClick={onSubmit}>
        <span>post</span>
      </BottomButton>
    </>
  );
};

export default CreateUserPostModal;
