import PageTitle from "@/app/components/PageTitle";
import UserPostModal from "@/app/components/UserPostModal";
import { ApolloError, gql, useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { useDeferredValue } from "react";
import toast from "react-hot-toast";

const query = gql`
  query GetCustomerPostAtStore($storeAccount: String!) {
    customerPostAtStore(storeAccount: $storeAccount) {
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

type Props = {
  searchQuery: string;
};

const SearchPostResult = ({ searchQuery }: Props) => {
  const {
    data,
    error,
  }: {
    data: { customerPostAtStore: UserPost[] };
    error: ApolloError | undefined;
  } = useSuspenseQuery(query, {
    variables: {
      storeAccount: searchQuery,
    },
  });

  if (error) {
    toast.error("No Store Found", {
      className: "font-bold text-lg",
    });
  }

  const deferredCustomerAtStore = useDeferredValue(data.customerPostAtStore);

  return deferredCustomerAtStore.length > 0 ? (
    <div className="pb-4">
      {deferredCustomerAtStore.map((customerPost) => (
        <UserPostModal key={customerPost.id} customerPost={customerPost} />
      ))}
      <div className="divider divider-vertical w-full my-2 m-auto" />
      <div className="w-full max-[450px]:w-11/12 m-auto">
        <div className="text-xl max-[450px]:text-lg mb-4 font-bold">
          Recommended Posts:
        </div>
      </div>
    </div>
  ) : (
    <div className="w-11/12 max-w-lg font-bold">
      <div className="w-full pt-4 space-y-2">
        <div className="w-full break-normal text-2xl max-[450px]:text-xl">
          No post found at
        </div>
        <div className="w-full flex justify-center text-3xl max-[450px]:text-2xl">
          <Link
            href={`/shop/${searchQuery}`}
            className="text-primary underline underline-offset-2"
          >
            @{searchQuery}
          </Link>
        </div>
      </div>
      <div className="divider divider-vertical w-full my-2 m-auto" />
      <div className="text-xl max-[450px]:text-lg mb-4">Recommended Posts:</div>
    </div>
  );
};

export default SearchPostResult;
