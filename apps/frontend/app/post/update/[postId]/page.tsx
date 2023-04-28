'use client';

import { useRouter } from 'next/navigation';
import EditModal from '../../components/EditModal/Modal';
import PageTitle from '@/components/PageTitle';
import useUpdatePost from '@/hooks/useUpdatePost';
import userPostList from '@/../public/data/UserPostList';

const UpdatePostPage = () => {
  const router = useRouter();

  const { setRate, setBody, update } = useUpdatePost(userPostList[0]);

  const onSubmit = () => {
    update();
    console.log('post updated');
    router.push('/');
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
        <PageTitle title="Update Post" />
        <EditModal
          buttonContent="post"
          // shop name
          shopName={userPostList[0].coffeeShop.coffeeShopName}
          shopNameDisabled={true}
          // rating
          rating={userPostList[0].rating}
          setRate={setRate}
          //post body
          postBody={userPostList[0].body}
          setPostBody={setBody}
          // submit
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default UpdatePostPage;
