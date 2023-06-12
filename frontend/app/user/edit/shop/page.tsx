"use client";

import EditShopInfoModal from "@/app/components/EditProfile/ShopInfo";
import useUpdateShop from "@/app/hooks/useUpdateShop";
import { Toaster } from "react-hot-toast";

const UpdateShopProfilePage = () => {
  const {
    name,
    phone,
    address,
    info,
    avatar,
    newAvatar,
    setName,
    setPhone,
    setAddress,
    setInfo,
    setAvatar,
    setNewAvatar,
    handleUpdateShop,
  } = useUpdateShop();

  return (
    <>
      <EditShopInfoModal
        buttonActionText="Update Info"
        avatar={newAvatar}
        avatarUrl={avatar}
        name={name}
        phone={phone}
        address={address}
        info={info}
        setName={setName}
        setPhone={setPhone}
        setAddress={setAddress}
        setInfo={setInfo}
        setAvatar={setNewAvatar}
        setOriginAvatar={setAvatar}
        handleEdit={handleUpdateShop}
      />
      <Toaster />
    </>
  );
};

export default UpdateShopProfilePage;
