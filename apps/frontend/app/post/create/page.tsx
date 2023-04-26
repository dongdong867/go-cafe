'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EditModal from '../components/EditModal/Modal';

const CreatePostPage = () => {
  const router = useRouter();

  const [shopName, setShopName] = useState('');

  const [generalRate, setGeneralRate] = useState(5);
  const [environmentRate, setEnvironmentRate] = useState(5);
  const [mealsRate, setMealsRate] = useState(5);
  const [attitudeRate, setAttitudeRate] = useState(5);

  const [postBody, setPostBody] = useState('');

  const onSubmit = () => {
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
          m-auto 
          overflow-scroll"
      >
        <EditModal
          buttonContent="post"
          // shop name
          setShopName={setShopName}
          // rating
          setGeneralRate={setGeneralRate}
          setEnvironmentRate={setEnvironmentRate}
          setMealsRate={setMealsRate}
          setAttitudeRate={setAttitudeRate}
          //post body
          setPostBody={setPostBody}
          // submit
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default CreatePostPage;
