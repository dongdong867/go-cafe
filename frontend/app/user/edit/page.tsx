"use client";

import EditCustomerInfoModal from "@/app/components/EditProfile/CustomerInfo";
import useUpdateCustomer from "@/app/hooks/useUpdateCustomer";
import { Toaster } from "react-hot-toast";

const UpdateCustomerProfilePage = () => {
  const {
    name,
    phone,
    email,
    avatar,
    newAvatar,
    setName,
    setPhone,
    setEmail,
    setAvatar,
    setNewAvatar,
    handleUpdateCustomer,
  } = useUpdateCustomer();

  return (
    <>
      <EditCustomerInfoModal
        buttonActionText="Update Info"
        name={name}
        phone={phone}
        email={email}
        avatar={newAvatar}
        avatarUrl={avatar}
        setName={setName}
        setPhone={setPhone}
        setOriginAvatar={setAvatar}
        setAvatar={setNewAvatar}
        setEmail={setEmail}
        handleEdit={handleUpdateCustomer}
      />
      <Toaster />
    </>
  );
};

export default UpdateCustomerProfilePage;
