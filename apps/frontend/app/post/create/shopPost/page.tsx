'use client';

import PageTitle from '@/components/PageTitle';
import useCreateShopPost from '@/hooks/useCreateShopPost';
import EditShopPostModal from '@/post/components/ShopPostModal';

const CreateShopPost = () => {
  const {
    title,
    body,
    pictureList,
    setTitle,
    setBody,
    setPictureList,
    createPost,
  } = useCreateShopPost();

  return (
    <div
      className="
        w-full max-w-lg 
        h-[calc(100vh-64px)] 
        max-[450px]:max-w-[350px] 
        m-auto"
    >
      <PageTitle title="Create Shop Post" />
      <EditShopPostModal
        title={title}
        body={body}
        pictureList={pictureList}
        setTitle={setTitle}
        setBody={setBody}
        setPictureList={setPictureList}
        onSubmit={createPost}
      />
    </div>
  );
};

export default CreateShopPost;
