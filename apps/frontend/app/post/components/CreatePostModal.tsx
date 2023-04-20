'use client';

import { useState } from 'react';
import EditModal from './EditModal';

const CreatePostModal = () => {
  const [shopName, setShopName] = useState('');

  const [generalRate, setGeneralRate] = useState(5);
  const [environmentRate, setEnvironmentRate] = useState(5);
  const [mealsRate, setMealsRate] = useState(5);
  const [attitudeRate, setAttitudeRate] = useState(5);

  const [postBody, setPostBody] = useState('');

  return (
    <>
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
      />
    </>
  );
};

export default CreatePostModal;
