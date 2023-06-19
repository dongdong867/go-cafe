"use client";

import InputModal from "@/app/components/Input/InputModal";
import EditPicture from "./EditModal/Picture";
import { BsHash } from "react-icons/bs";
import TextArea from "@/app/components/Input/TextArea";
import BottomButton from "@/app/components/Button/BottomButton";
import useCreateShopPost from "@/app/hooks/useCreateShopPost";

type Props = {
  postId?: string;
};

const CreateShopPostModal = ({ postId = undefined }: Props) => {
  const {
    title,
    body,
    pictureList,
    setTitle,
    setBody,
    setPictureList,
    createPost: onSubmit,
  } = useCreateShopPost();

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

export default CreateShopPostModal;
