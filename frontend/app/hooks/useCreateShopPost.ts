import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useBase64 } from "./useBase64";
import { uploadPicture } from "@/lib/picture-upload";
import toast from "react-hot-toast";

const CREATE_SHOP_POST = gql`
  mutation CreateStorePost($createStorePostInput: CreateStorePostInput!) {
    createStorePost(createStorePostInput: $createStorePostInput)
  }
`;

const useCreateShopPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [pictureList, setPictureList] = useState([] as File[]);

  const router = useRouter();

  const [createStorePost] = useMutation(CREATE_SHOP_POST);

  const createPost = async () => {
    const urlList = await Promise.all(
      pictureList.map(async (picture) => {
        const base64 = await useBase64(picture);
        return await uploadPicture(base64);
      })
    );

    const create = createStorePost({
      variables: {
        createStorePostInput: {
          title: title,
          body: body,
          pictures: urlList,
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
      .then(() => router.push("/user"));
  };

  return {
    title,
    body,
    pictureList,
    setTitle,
    setBody,
    setPictureList,
    createPost,
  };
};

export default useCreateShopPost;
