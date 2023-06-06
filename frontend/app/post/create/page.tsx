"use client";

import PageTitle from "@/app/components/PageTitle";
import useCreatePost from "@/app/hooks/useCreatePost";
import EditModal from "../components/EditModal/Modal";

const CreatePostPage = () => {
  const {
    pictureList,
    setShopAccount,
    setRate,
    setBody,
    setPictureList,
    createPost,
  } = useCreatePost();

  return (
    <>
      <div
        className="
          w-full max-w-lg 
          h-[calc(100vh-64px)] 
          max-[450px]:max-w-[350px] 
          m-auto"
      >
        <PageTitle title="Create Post" />
        <EditModal
          pictureList={pictureList}
          setShopAccount={setShopAccount}
          setRate={setRate}
          setPostBody={setBody}
          setPictureList={setPictureList}
          onSubmit={createPost}
        />
      </div>
    </>
  );
};

export default CreatePostPage;
