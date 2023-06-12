"use client";

import useSearchShop from "@/app/hooks/useSearchShop";
import EditPicture from "./Picture";
import InputModal from "@/app/components/Input/InputModal";
import { MdLocationOn } from "react-icons/md";
import EditRating from "./Rating";
import TextArea from "@/app/components/Input/TextArea";
import BottomButton from "@/app/components/Button/BottomButton";
import useUpdatePost from "@/app/hooks/useUpdatePost";
import useCreatePost from "@/app/hooks/useCreatePost";

const getPostData = (postId: string | undefined) => {
  if (!postId) {
    const {
      pictureList,
      setShopAccount,
      setRate,
      setBody,
      setPictureList,
      createPost: onSubmit,
    } = useCreatePost();

    return {
      pictureList,
      setShopAccount,
      setRate,
      setBody,
      setPictureList,
      onSubmit,
    };
  } else {
    const {
      body,
      rating,
      shop,
      originPicture,
      addedPicture: pictureList,
      deletedPicture,
      setRate,
      setBody,
      setAddedPicture: setPictureList,
      setDeletedPicture,
      updatePost: onSubmit,
    } = useUpdatePost(postId);

    return {
      body,
      rating,
      shopAccount: shop.user.account,
      originPicture,
      pictureList,
      deletedPicture,
      setRate,
      setBody,
      setPictureList,
      setDeletedPicture,
      onSubmit,
    };
  }
};

type Props = {
  postId?: string;
};

const EditModal = ({ postId = undefined }: Props) => {
  const {
    body = "",
    rating = {
      general: 5,
      environment: 5,
      meals: 5,
      attitude: 5,
    },
    shopAccount = "",
    pictureList,
    originPicture = [],
    deletedPicture = [],
    setRate,
    setBody,
    setShopAccount,
    setPictureList,
    setDeletedPicture = undefined,
    onSubmit,
  } = getPostData(postId);

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
              disabled={postId !== undefined}
              topLabelText="Select a coffee shop"
              sideLabel={<MdLocationOn />}
              value={postId !== undefined ? shopAccount : query}
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
                        setShopAccount!(store.user.account);
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

        <TextArea postBody={body} setPostBody={setBody} />
      </div>
      <div className="w-full h-24" />
      <BottomButton onClick={handleSubmit}>
        <span>post</span>
      </BottomButton>
    </>
  );
};

export default EditModal;
