'use client';

import EditModal from '../../components/EditModal/Modal';
import PageTitle from '@/components/PageTitle';
import useUpdatePost from '@/hooks/useUpdatePost';

type Props = {
  params: {
    postId: string;
  };
};

const UpdatePostPage = ({ params }: Props) => {
  const { body, rating, shop, setRate, setBody, updatePost } = useUpdatePost(
    params.postId
  );

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
          // shop name
          shopName={shop.user.account}
          shopNameDisabled={true}
          // rating
          rating={rating}
          setRate={setRate}
          //post body
          postBody={body}
          setPostBody={setBody}
          // submit
          onSubmit={updatePost}
        />
      </div>
    </>
  );
};

export default UpdatePostPage;
