"use client";

import PageTitle from "@/app/components/PageTitle";
import useUpdateShopPost from "@/app/hooks/useUpdateShopPost";
import EditShopPostModal from "@/app/post/components/ShopPostModal";

type Props = {
  params: {
    postId: string;
  };
};

const UpdateShopPostPage = ({ params }: Props) => {
  const {
    title,
    body,
    originPicture,
    addedPicture,
    deletedPicture,
    setTitle,
    setBody,
    setAddedPicture,
    setDeletedPicture,
    updatePost,
  } = useUpdateShopPost(params.postId);

  return (
    <div
      className="
        w-full 
        max-w-lg 
        h-[calc(100vh-64px)] 
        max-[450px]:max-w-[350px] 
        m-auto"
    >
      <PageTitle title="Update Post" />
      <EditShopPostModal
        title={title}
        body={body}
        originPicture={originPicture}
        pictureList={addedPicture}
        deletedPicture={deletedPicture}
        setTitle={setTitle}
        setBody={setBody}
        setPictureList={setAddedPicture}
        setDeletedPicture={setDeletedPicture}
        onSubmit={updatePost}
      />
    </div>
  );
};

export default UpdateShopPostPage;
