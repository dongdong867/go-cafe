import PageTitle from "@/app/components/PageTitle";
import UserPostModal from "@/app/components/UserPostModal";
import { ApolloError, gql, useSuspenseQuery } from "@apollo/client";
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

  return (
    deferredCustomerAtStore.length > 0 && (
      <div className="pb-4">
        {deferredCustomerAtStore.map((customerPost) => (
          <UserPostModal key={customerPost.id} customerPost={customerPost} />
        ))}
        <div className="w-full max-[450px]:w-11/12 m-auto">
          <PageTitle title="Recommend posts" />
        </div>
      </div>
    )
  );
};

export default SearchPostResult;
