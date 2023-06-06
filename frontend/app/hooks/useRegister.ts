import { uploadPicture } from "@/lib/picture-upload";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useBase64 } from "./useBase64";
import toast from "react-hot-toast";

const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
    createCustomer(createCustomerInput: $createCustomerInput)
  }
`;

const CREATE_SHOP = gql`
  mutation CreateStore($createStoreInput: CreateStoreInput!) {
    createStore(createStoreInput: $createStoreInput)
  }
`;

const useRegister = () => {
  // basic account info
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null as unknown as File);

  // customer info
  const [email, setEmail] = useState("");

  // shop info
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");

  const router = useRouter();

  // mutation
  const [createCustomer] = useMutation(CREATE_CUSTOMER);
  const [createStore] = useMutation(CREATE_SHOP);

  // handle register

  const registerCustomer = async () => {
    const avatarUrl = await uploadPicture(await useBase64(avatar));

    const create = createCustomer({
      variables: {
        createCustomerInput: {
          account: account,
          password: password,
          name: name,
          phone: phone,
          avatar: avatarUrl,
          email: email,
        },
      },
    }).then(() => router.replace("/"));

    await toast.promise(
      create,
      {
        loading: "Creating...",
        success: "Account Created \n Please Login Again",
        error: (error) => error.message,
      },
      {
        className: "font-bold text-lg",
      }
    );
  };

  const registerShop = async () => {
    const avatarUrl = await uploadPicture(await useBase64(avatar));

    const create = createStore({
      variables: {
        createStoreInput: {
          account: account,
          password: password,
          name: name,
          phone: phone,
          avatar: avatarUrl,
          address: address,
          info: info,
        },
      },
    }).then(() => router.replace("/"));

    await toast.promise(
      create,
      {
        loading: "Creating...",
        success: "Account Created \n Please Login Again",
        error: (error) => error.message,
      },
      {
        className: "font-bold text-lg",
      }
    );
  };

  return {
    account,
    password,
    name,
    phone,
    avatar,
    email,
    address,
    info,
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
  };
};

export default useRegister;
