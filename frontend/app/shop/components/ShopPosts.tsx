import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import ShopPostModal from "./ShopPostModal";

type GraphQLType = {
  storePost: {
    id: string;
    title: string;
    post: {
      body: string;
      postPicture: {
        picture: {
          data: string;
        };
      }[];
    };
  }[];
};

const query = gql`
  query ShopPosts($shopAccount: String!) {
    storePost(storeAccount: $shopAccount) {
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

const ShopPosts = async (shopAccount: string) => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({
    query: query,
    variables: {
      shopAccount: decodeURIComponent(shopAccount),
    },
  });

  return data.storePost.map((post) => (
    <ShopPostModal key={post.id} post={post} />
  ));
};

export default ShopPosts;
