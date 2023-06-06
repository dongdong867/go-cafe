import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useState } from "react";
import useRating from "./useRating";
import { useRouter } from "next/navigation";
import { deletedPictures, uploadPicture } from "@/lib/picture-upload";
import { useBase64 } from "./useBase64";
import toast from "react-hot-toast";

const query = gql`
  query CustomerPost($postId: ID!) {
    customerPost(postId: $postId) {
      id
      post {
        body
        postPicture {
          picture {
            data
          }
        }
      }
      rating {
        general
        environment
        meals
        attitude
      }
      store {
        user {
          account
          name
        }
      }
      customer {
        user {
          name
        }
      }
    }
  }
`;

const UPDATE_CUSTOMER_POST = gql`
  mutation UpdateCustomerPost(
    $updateCustomerPostInput: UpdateCustomerPostInput!
  ) {
    updateCustomerPost(updateCustomerPostUInput: $updateCustomerPostInput)
  }
`;

const useUpdatePost = (postId: string) => {
  const { data: originData }: { data: { customerPost: UserPost } } =
    useSuspenseQuery(query, {
      variables: {
        postId: postId,
      },
    });

  const [body, setBody] = useState(originData.customerPost.post.body);
  const [addedPicture, setAddedPicture] = useState([] as File[]);
  const [deletedPicture, setDeletedPicture] = useState([] as string[]);
  const { rating, setRate } = useRating(originData.customerPost.rating);

  const [updateCustomerPost] = useMutation(UPDATE_CUSTOMER_POST);

  const router = useRouter();

  const updatePost = async () => {
    await deletedPictures(deletedPicture);

    const pictureList = originData.customerPost.post.postPicture.map(
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

    const update = updateCustomerPost({
      variables: {
        updateCustomerPostInput: {
          id: originData.customerPost.id,
          body: body,
          pictureList: pictureList.filter((picture) => picture !== undefined),
          rating: {
            general: rating.general,
            environment: rating.environment,
            meals: rating.meals,
            attitude: rating.attitude,
          },
        },
      },
    }).then(() => router.push("/user"));

    await toast.promise(
      update,
      {
        loading: "Updating...",
        error: (err) => err.message,
        success: "Updated Successfully",
      },
      {
        className: "font-bold text-lg",
      }
    );
  };

  return {
    body,
    rating,
    shop: originData.customerPost.store,
    originPicture: originData.customerPost.post.postPicture.map(
      (picture) => picture.picture.data
    ),
    addedPicture,
    deletedPicture,
    setRate,
    setBody,
    setAddedPicture,
    setDeletedPicture,
    updatePost,
  };
};

export default useUpdatePost;
