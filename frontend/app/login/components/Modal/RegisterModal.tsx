"use client";

import useRegister from "@/app/hooks/useRegister";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import RegisterAccountAndPassword from "../Register/AccountAndPassword";
import EditCustomerInfoModal from "@/app/components/profile/CustomerInfo";
import EditShopInfoModal from "@/app/components/profile/ShopInfo";

const query = gql`
  query IsAccountAvailable($account: String!) {
    isAccountAvailable(account: $account)
  }
`;

type Props = {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterModal = ({ setSignin }: Props) => {
  const {
    account,
    password,
    name,
    phone,
    email,
    address,
    info,
    avatar,
    setAccount,
    setPassword,
    setName,
    setPhone,
    setAvatar,
    setEmail,
    setAddress,
    setInfo,
    registerCustomer,
    registerShop,
  } = useRegister();

  const [isShop, setIsShop] = useState(false);
  const [nextStep, setNextStep] = useState(false);

  const [accountPass, setAccountPass] = useState(true);
  const [passwordPass, setPasswordPass] = useState(true);

  const accountTest = useSuspenseQuery(query, {
    variables: {
      account: account,
    },
  }).data as { isAccountAvailable: boolean };

  const handleNextStep = () => {
    if (account.length === 0) {
      toast.error("Account can't be empty.");
      setAccountPass(false);
    } else if (password.length === 0) {
      toast.error("Password can't be empty.");
      setPasswordPass(false);
    } else {
      if (accountTest.isAccountAvailable) {
        setNextStep(true);
      } else {
        toast.error("Account has been used.", {
          className: "font-bold text-lg",
        });
      }
    }
  };

  useEffect(() => {
    if (account.indexOf(" ") > -1) {
      toast.error("Space is not allowed", { className: "font-bold text-lg" });
      setAccountPass(false);
    } else {
      if (!accountPass) setAccountPass(true);
    }
  }, [account]);

  useEffect(() => {
    if (password.indexOf(" ") > -1) {
      toast.error("Space is not allowed", { className: "font-bold text-lg" });
      setPasswordPass(false);
    } else {
      if (!passwordPass) setPasswordPass(true);
    }
  }, [password]);

  return (
    <>
      {!nextStep && (
        <RegisterAccountAndPassword
          accountPass={accountPass}
          passwordPass={passwordPass}
          setAccount={setAccount}
          setPassword={setPassword}
          setIsShop={setIsShop}
          setSignin={setSignin}
          handleNextStep={handleNextStep}
        />
      )}
      {nextStep && !isShop && (
        <EditCustomerInfoModal
          avatar={avatar}
          name={name}
          email={email}
          phone={phone}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setAvatar={setAvatar}
          buttonActionText="Create Account"
          handleEdit={registerCustomer}
        />
      )}
      {nextStep && isShop && (
        <EditShopInfoModal
          avatar={avatar}
          name={name}
          phone={phone}
          address={address}
          info={info}
          setName={setName}
          setPhone={setPhone}
          setAvatar={setAvatar}
          setAddress={setAddress}
          setInfo={setInfo}
          buttonActionText="Create Account"
          handleEdit={registerShop}
        />
      )}
      <Toaster />
    </>
  );
};

export default RegisterModal;
