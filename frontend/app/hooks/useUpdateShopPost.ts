import { gql, useMutation, useSuspenseQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useBase64 } from "./useBase64";
import { toast } from "react-hot-toast";
import { deletedPictures, uploadPicture } from "@/lib/picture-upload";

const query = gql`
  query GetPostById($postId: String!) {
    storePostById(postId: $postId) {
      post {
        body
        postPicture {
          picture {
            data
          }
        }
      }
      id
      title
    }
  }
`;

const UPDATE_SHOP_POST = gql`
  mutation UpdateStorePost($updateStorePostInput: UpdateStorePostInput!) {
    updateStorePost(updateStorePostInput: $updateStorePostInput)
  }
`;

const useUpdateShopPost = (postId: string) => {
  const { data: originData }: { data: { storePostById: ShopPost } } =
    useSuspenseQuery(query, {
      variables: {
        postId: postId,
      },
    });

  const [title, setTitle] = useState(originData.storePostById.title);
  const [body, setBody] = useState(originData.storePostById.post.body);
  const [addedPicture, setAddedPicture] = useState([] as File[]);
  const [deletedPicture, setDeletedPicture] = useState([] as string[]);

  const [updateStorePost] = useMutation(UPDATE_SHOP_POST);

  const router = useRouter();

  const updatePost = async () => {
    await deletedPictures(deletedPicture);

    const pictureList = originData.storePostById.post.postPicture.map(
      (picture) => {
        if (!deletedPicture.includes(picture.picture.data))
          return picture.picture.data;
      }
    );

    await Promise.all(
      addedPicture.map(async (picture) => {
        const base64 = await useBase64(picture);
        pictureList.push(await uploadPicture(base64));
      })
    );

    console.log(pictureList);

    const update = updateStorePost({
      variables: {
        updateStorePostInput: {
          id: originData.storePostById.id,
          title: title,
          body: body,
          pictureList: pictureList.filter((picture) => picture !== undefined),
        },
      },
    }).then(() => router.push("/user"));

    await toast.promise(
      update,
      {
        loading: "Updating...",
        error: (error) => error.message,
        success: "Updating Successfully",
      },
      {
        className: "font-bold text-lg",
      }
    );
  };

  return {
    title,
    body,
    originPicture: originData.storePostById.post.postPicture.map(
      (picture) => picture.picture.data
    ),
    addedPicture,
    deletedPicture,
    setTitle,
    setBody,
    setAddedPicture,
    setDeletedPicture,
    updatePost,
  };
};

export default useUpdateShopPost;
