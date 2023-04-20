'use client';

import { useState } from 'react';
import EditModal from '../../components/EditModal';
import { useRouter } from 'next/navigation';

const UpdatePostPage = () => {
  const router = useRouter();

  const [shopName, setShopName] = useState('OOO Shop');

  const [generalRate, setGeneralRate] = useState(4);
  const [environmentRate, setEnvironmentRate] = useState(3);
  const [mealsRate, setMealsRate] = useState(2);
  const [attitudeRate, setAttitudeRate] = useState(1);

  const [postBody, setPostBody] = useState(
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eum autem. \
    Explicabo magni corrupti eius perspiciatis at unde quas quaerat, \
    numquam nam nulla corporis, iusto enim quisquam dolores rem ipsum.'
  );

  const onSubmit = () => {
    console.log('post updated');
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
          shopName={shopName}
          shopNameDisabled={false}
          setShopName={setShopName}
          // rating
          generalRate={generalRate}
          environmentRate={environmentRate}
          mealsRate={mealsRate}
          attitudeRate={attitudeRate}
          setGeneralRate={setGeneralRate}
          setEnvironmentRate={setEnvironmentRate}
          setMealsRate={setMealsRate}
          setAttitudeRate={setAttitudeRate}
          //post body
          postBody={postBody}
          setPostBody={setPostBody}
          // submit
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default UpdatePostPage;
