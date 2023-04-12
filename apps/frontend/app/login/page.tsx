'use client';

import { useEffect, useState } from 'react';
//components
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

const LoginPage = () => {
  const [signin, setSignin] = useState(true);

  return (
    <>
      {signin ? (
        <LoginModal setSignin={setSignin} />
      ) : (
        <RegisterModal setSignin={setSignin} />
      )}
    </>
  );
};

export default LoginPage;
