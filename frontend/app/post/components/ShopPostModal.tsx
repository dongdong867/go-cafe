"use client";

import InputModal from "@/app/components/Input/InputModal";
import EditPicture from "./EditModal/Picture";
import { BsHash } from "react-icons/bs";
import TextArea from "@/app/components/Input/TextArea";
import BottomButton from "@/app/components/Button/BottomButton";
import useCreateShopPost from "@/app/hooks/useCreateShopPost";
import useUpdateShopPost from "@/app/hooks/useUpdateShopPost";

const getPostData = (postId: string | undefined) => {
  if (!postId) {
    const {
      title,
      body,
      pictureList,
      setTitle,
      setBody,
      setPictureList,
      createPost: onSubmit,
    } = useCreateShopPost();

    return {
      title,
      body,
      pictureList,
      setTitle,
      setBody,
      setPictureList,
      onSubmit,
    };
  } else {
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

    return {
      title,
      body,
      originPicture,
      pictureList,
      deletedPicture,
      setTitle,
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

const EditShopPostModal = ({ postId = undefined }: Props) => {
  const {
    title,
    body,
    pictureList,
    originPicture = [],
    deletedPicture = [],
    setTitle,
    setBody,
    setPictureList,
    setDeletedPicture = undefined,
    onSubmit,
  } = getPostData(postId);

  return (
    <>
      <div>
        <EditPicture
          originPicture={originPicture}
          pictureList={pictureList}
          deletedPicture={deletedPicture}
          setPictureList={setPictureList}
          setDeletedPicture={setDeletedPicture}
        />

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
    </>
  );
};

export default EditShopPostModal;
