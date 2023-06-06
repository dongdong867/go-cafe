"use client";

import { deletedPictures } from "@/lib/picture-upload";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { useId } from "react";
import Link from "next/link";

const DELETE_CUSTOMER_POST = gql`
  mutation DeleteCustomerPost(
    $deleteCustomerPostInput: DeleteCustomerPostInput!
  ) {
    deleteCustomerPost(deleteCustomerPostInput: $deleteCustomerPostInput)
  }
`;

const DELETE_SHOP_POST = gql`
  mutation DeleteStorePost($deleteStorePostInput: DeleteStorePostInput!) {
    deleteStorePost(deleteStorePostInput: $deleteStorePostInput)
  }
`;

type Props = {
  editable?: boolean;
  data: PostModalData;
  children: React.ReactNode;
  rates: React.ReactNode;
};

const PostModal = ({ editable = false, data, children, rates }: Props) => {
  const router = useRouter();

  if (!localStorage) router.push("/login");

  const role = localStorage.getItem("role");
  const editHref =
    role === "customer"
      ? `/post/update/${data.id}`
      : `/post/update/shopPost/${data.id}`;

  const [deleteCustomerPost] = useMutation(DELETE_CUSTOMER_POST);
  const [deleteStorePost] = useMutation(DELETE_SHOP_POST);

  const handleDelete = async () => {
    const deletePost =
      role === "customer"
        ? deleteCustomerPost({
            variables: {
              deleteCustomerPostInput: {
                postId: data.id,
              },
            },
          })
        : deleteStorePost({
            variables: {
              deleteStorePostInput: {
                id: data.id,
              },
            },
          });

    await toast
      .promise(
        deletePost,
        {
          loading: "Deleting...",
          error: (error) => error.message,
          success: "Delete Successfully",
        },
        {
          className: "font-bold text-lg",
        }
      )
      .then(async () => {
        await deletedPictures(
          data.pictures.map((picture) => picture.picture.data)
        ).then(() => router.refresh());
      });
  };

  return (
    <>
      <div
        className="
          card 
          w-full h-max
          max-w-lg max-[450px]:max-w-[360px] 
          border-2 
          bg-base-200 
          mb-4"
      >
        <figure className="h-[384px] max-[450px]:h-[270px]">
          <div className="carousel bg-base-100">
            {data.pictures.map((picture) => {
              return (
                <div className="carousel-item w-full" key={useId()}>
                  <Image
                    src={picture.picture.data}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </div>
              );
            })}
          </div>
        </figure>

        <div className="card-body px-2 py-0">
          <div className="collapse">
            <input type="checkbox" />

            {children}

            {/* post body */}
            <div className="collapse-content font-medium space-y-4">
              <div>{rates}</div>
              <div className="whitespace-pre-line">{data.body}</div>
              {editable && (
                <div className="flex justify-end space-x-2">
                  <Link
                    href={editHref}
                    className="btn btn-primary text-base-100"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="btn btn-error text-white"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default PostModal;
