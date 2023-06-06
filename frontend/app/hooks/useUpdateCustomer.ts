import { deletedPictures, uploadPicture } from "@/lib/picture-upload";
import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useBase64 } from "./useBase64";

const query = gql`
  query Customer {
    customer {
      user {
        avatar {
          data
        }
        name
        phone
      }
      email
    }
  }
`;

const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($updateCustomerInput: UpdateCustomerInput!) {
    updateCustomer(updateCustomerInput: $updateCustomerInput)
  }
`;

type GraphqlType = {
  customer: {
    user: {
      avatar: {
        data: string;
      };
      name: string;
      phone: string;
    };
    email: string;
  };
};

const useUpdateCustomer = () => {
  const { data }: { data: GraphqlType } = useSuspenseQuery(query);

  const [name, setName] = useState(data.customer.user.name);
  const [phone, setPhone] = useState(data.customer.user.phone);
  const [email, setEmail] = useState(data.customer.email);
  const [avatar, setAvatar] = useState(data.customer.user.avatar.data);
  const [newAvatar, setNewAvatar] = useState(undefined as unknown as File);

  const [updateCustomer] = useMutation(UPDATE_CUSTOMER);

  const router = useRouter();

  const handleUpdateCustomer = async () => {
    if (!avatar && !newAvatar) {
      toast.error("Avatar Missing", {
        className: "font-bold text-lg",
      });
      return;
    }

    let pictureUrl = avatar;
    if (newAvatar) {
      await deletedPictures([data.customer.user.avatar.data]);
      const base64 = await useBase64(newAvatar);
      pictureUrl = await uploadPicture(base64);
    }

    const update = updateCustomer({
      variables: {
        updateCustomerInput: {
          name: name,
          phone: phone,
          email: email,
          avatar: pictureUrl,
        },
      },
    });

    await toast
      .promise(
        update,
        {
          loading: "Updating...",
          error: (error) => error.message,
          success: "Updating Successfully",
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
    email,
    avatar,
    newAvatar,
    setName,
    setPhone,
    setEmail,
    setAvatar,
    setNewAvatar,
    handleUpdateCustomer,
  };
};

export default useUpdateCustomer;
