import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import useRating from "./useRating";
import { useRouter } from "next/navigation";
import { useBase64 } from "./useBase64";
import { uploadPicture } from "@/lib/picture-upload";
import toast from "react-hot-toast";

const CREATE_POST = gql`
  mutation CreateCustomerPost(
    $createCustomerPostInput: CreateCustomerPostInput!
  ) {
    createCustomerPost(createCustomerPostInput: $createCustomerPostInput)
  }
`;

const useCreatePost = () => {
  const [shopAccount, setShopAccount] = useState("");
  const [body, setBody] = useState("");
  const [pictureList, setPictureList] = useState([] as File[]);

  const { rating, setRate } = useRating();

  const router = useRouter();

  const [createCustomerPost] = useMutation(CREATE_POST);

  const createPost = async () => {
    const urlList = await Promise.all(
      pictureList.map(async (picture) => {
        const base64 = await useBase64(picture);
        return await uploadPicture(base64);
      })
    );
    const create = createCustomerPost({
      variables: {
        createCustomerPostInput: {
          body: body,
          pictures: urlList,
          rating: rating,
          storeAccount: shopAccount,
        },
      },
    });

    await toast
      .promise(
        create,
        {
          loading: "Creating...",
          error: (error) => error.message,
          success: "Create Successfully",
        },
        {
          className: "font-bold text-lg",
        }
      )
      .then(() => router.push("/"));
  };

  return {
    shopAccount,
    pictureList,
    setShopAccount,
    setRate,
    setBody,
    setPictureList,
    createPost,
  };
};

export default useCreatePost;
