"use client";

import useUpdateShopPost from "@/app/hooks/useUpdateShopPost";
import EditPicture from "./EditModal/Picture";
import InputModal from "@/app/components/Input/InputModal";
import { BsHash } from "react-icons/bs";
import TextArea from "@/app/components/Input/TextArea";
import BottomButton from "@/app/components/Button/BottomButton";

type Props = {
  postId: string;
};

const UpdateShopPostModal = ({ postId }: Props) => {
  const {
    title,
    body,
    originPicture,
    addedPicture: pictureList,
    deletedPicture,
    setTitle,
    setBody,
    setAddedPicture: setPictureList,
    setDeletedPicture,
    updatePost: onSubmit,
  } = useUpdateShopPost(postId);

  return (
    <div>
      <EditPicture pictureList={pictureList} setPictureList={setPictureList} />

      <InputModal
        topLabelText="TITLE"
        sideLabel={<BsHash />}
        value={title}
        setValue={setTitle}
      />

      <div className="label">
        <span className="label-text font-semibold">BODY</span>
      </div>
      <TextArea postBody={body} setPostBody={setBody} />

      <div className="w-full h-24" />

      <BottomButton onClick={onSubmit}>
        <span>Create</span>
      </BottomButton>
    </div>
  );
};

export default UpdateShopPostModal;
