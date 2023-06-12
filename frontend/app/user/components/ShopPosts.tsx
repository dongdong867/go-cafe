import ShopPostModal from "@/app/shop/components/ShopPostModal";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

type GraphQLShopPostType = {
  post: {
    body: string;
    postPicture: {
      picture: {
        data: string;
      };
    }[];
  };
  id: string;
  title: string;
};

const shopPostsQuery = gql`
  query ShopPosts {
    storeSelfPost {
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

const ShopPosts = async () => {
  const client = getClient();
  const { data } = await client.query({ query: shopPostsQuery });

  return (
    <>
      {data.storeSelfPost.length > 0 && (
        <div className="text-2xl font-bold mt-8">History Post</div>
      )}
      <div className="divider my-2" />
      {data.storeSelfPost.map((post: GraphQLShopPostType) => (
        <ShopPostModal key={post.id} editable post={post} />
      ))}
    </>
  );
};

export default ShopPosts;
