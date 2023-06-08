"use client";

import { useEffect, useState } from "react";
import LoginModal from "./components/Modal/LoginModal";
import RegisterModal from "./components/Modal/RegisterModal";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      document.cookie = cookie + "=; expires=" + new Date(0).toUTCString();
    }
    router.refresh();
  }, []);

  const [signin, setSignin] = useState(true);

  return (
    <>
      <div className="w-full h-[calc(100vh-64px)] max-[450px]:h-screen">
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
