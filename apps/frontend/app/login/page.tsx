'use client';

import { useEffect, useState } from 'react';
//components
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

const LoginPage = () => {
  const [signin, setSignin] = useState(true);

  return (
    <>
      <div className="w-full h-[calc(100vh-64px)]">
        {signin ? (
          <LoginModal setSignin={setSignin} />
        ) : (
          <RegisterModal setSignin={setSignin} />
        )}
      </div>
    </>
  );
};

export default LoginPage;
