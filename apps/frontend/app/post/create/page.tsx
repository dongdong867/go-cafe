'use client';

import { useRouter } from 'next/navigation';

import PageTitle from '@/components/PageTitle';
import EditModal from '../components/EditModal/Modal';
import useCreatePost from '@/hooks/useCreatePost';

const CreatePostPage = () => {
  const router = useRouter();

  const { setCoffeeShop, setRate, setBody, create } = useCreatePost();

  const onSubmit = () => {
    create();
    console.log('post created');
    router.replace('/');
  };

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
          buttonContent="post"
          // shop name
          setShopName={setCoffeeShop}
          // rating
          setRate={setRate}
          //post body
          setPostBody={setBody}
          // submit
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default CreatePostPage;
