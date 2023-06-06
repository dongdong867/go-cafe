import { deletedPictures, uploadPicture } from "@/lib/picture-upload";
import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useBase64 } from "./useBase64";

const query = gql`
  query Self {
    storeSelf {
      user {
        avatar {
          data
        }
        name
        phone
      }
      address
      info
    }
  }
`;

const UPDATE_STORE = gql`
  mutation UpdateStore($updateStoreInput: UpdateStoreInput!) {
    updateStore(updateStoreInput: $updateStoreInput)
  }
`;

type GraphqlType = {
  storeSelf: {
    user: {
      avatar: {
        data: string;
      };
      name: string;
      phone: string;
    };
    address: string;
    info: string;
  };
};

const useUpdateShop = () => {
  const { data }: { data: GraphqlType } = useSuspenseQuery(query);

  const [name, setName] = useState(data.storeSelf.user.name);
  const [phone, setPhone] = useState(data.storeSelf.user.phone);
  const [address, setAddress] = useState(data.storeSelf.address);
  const [info, setInfo] = useState(data.storeSelf.info);
  const [avatar, setAvatar] = useState(data.storeSelf.user.avatar.data);
  const [newAvatar, setNewAvatar] = useState(undefined as unknown as File);

  const [updateStore] = useMutation(UPDATE_STORE);

  const router = useRouter();

  const handleUpdateShop = async () => {
    if (!avatar && !newAvatar) {
      toast.error("Avatar Missing", {
        className: "font-bold text-lg",
      });
      return;
    }

    let pictureUrl = avatar;
    if (newAvatar) {
      await deletedPictures([data.storeSelf.user.avatar.data]);
      const base64 = await useBase64(newAvatar);
      pictureUrl = await uploadPicture(base64);
    }

    const update = updateStore({
      variables: {
        updateStoreInput: {
          address: address,
          avatar: pictureUrl,
          info: info,
          name: name,
          phone: phone,
        },
      },
    });

    await toast
      .promise(
        update,
        {
          loading: "Updating...",
          error: (error) => error.message,
          success: "Updated Successfully",
        },
        {
          className: "font-bold text-lg",
        }
      )
      .then(() => {
        router.push("/");
        document.cookie = `avatar=${pictureUrl};path=/`;
      });
  };

  return {
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
  };
};

export default useUpdateShop;
