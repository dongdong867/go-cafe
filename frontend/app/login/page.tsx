"use client";

import { useState } from "react";
import LoginModal from "./components/Modal/LoginModal";
import RegisterModal from "./components/Modal/RegisterModal";

const LoginPage = () => {
  localStorage.clear();
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    document.cookie = cookie + "=; expires=" + new Date(0).toUTCString();
  }

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
