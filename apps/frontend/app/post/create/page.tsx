'use client';

import PageTitle from '@/components/PageTitle';
import EditModal from '../components/EditModal/Modal';
import useCreatePost from '@/hooks/useCreatePost';

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
