"use client";

import InputModal from "@/app/components/Input/InputModal";
import EditPicture from "./EditModal/Picture";
import { BsHash } from "react-icons/bs";
import TextArea from "@/app/components/Input/TextArea";
import BottomButton from "@/app/components/Button/BottomButton";

type Props = {
  title: string;
  body: string;
  pictureList: File[];
  originPicture?: string[];
  deletedPicture?: string[];
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  setPictureList: React.Dispatch<React.SetStateAction<File[]>>;
  setDeletedPicture?: React.Dispatch<React.SetStateAction<string[]>>;
  onSubmit: () => void;
};

const EditShopPostModal = ({
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
}: Props) => {
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
