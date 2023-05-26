'use client';

//components
import Image from 'next/image';

//images
import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import { useEffect, useId } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const DELETE_POST = gql`
  mutation DeleteCustomerPost(
    $deleteCustomerPostInput: DeleteCustomerPostInput!
  ) {
    deleteCustomerPost(deleteCustomerPostInput: $deleteCustomerPostInput)
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
  const [deleteCustomerPost, { data: deleteData, error }] =
    useMutation(DELETE_POST);

  useEffect(() => {
    if (deleteData)
      toast.success(deleteData.deleteCustomerPost, {
        className: 'font-bold text-lg',
      });
    setTimeout(() => {
      router.refresh();
    }, 2000);
  }, [deleteData]);

  useEffect(() => {
    if (error) toast.error(error.message, { className: 'font-bold text-lg' });
  }, [error]);

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
              <div>{data.body}</div>
              {editable && (
                <div className="flex justify-end space-x-2">
                  <Link
                    href={`/post/update/${data.id}`}
                    className="btn btn-primary text-base-100"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      deleteCustomerPost({
                        variables: {
                          deleteCustomerPostInput: {
                            postId: data.id,
                          },
                        },
                      });
                    }}
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
