"use client";

import useUpdatePost from "@/app/hooks/useUpdatePost";
import EditPicture from "./Picture";
import InputModal from "@/app/components/Input/InputModal";
import { MdLocationOn } from "react-icons/md";
import EditRating from "./Rating";
import TextArea from "@/app/components/Input/TextArea";
import BottomButton from "@/app/components/Button/BottomButton";

type Props = {
  postId: string;
};

const UpdateUserPostModal = ({ postId }: Props) => {
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
          disabled={postId !== undefined}
          topLabelText="Select a coffee shop"
          sideLabel={<MdLocationOn />}
          value={shop.user.account}
        />

        <EditRating rating={rating} setRate={setRate} />

        <TextArea postBody={body} setPostBody={setBody} />
      </div>
      <div className="w-full h-24" />
      <BottomButton onClick={onSubmit}>
        <span>post</span>
      </BottomButton>
    </>
  );
};

export default UpdateUserPostModal;
