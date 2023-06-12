import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import Image from "next/image";

type GraphQLType = {
  customer: {
    user: {
      avatar: {
        data: string;
      };
      account: string;
      name: string;
      phone: string;
      postCount: number;
    };
    email: string;
    followingCount: number;
  };
};

const query = gql`
  query Customer {
    customer {
      user {
        avatar {
          data
        }
        account
        name
        phone
        postCount
      }
      email
      followingCount
    }
  }
`;

const UserCustomerProfile = async () => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({ query });

  return (
    <>
      <div className="w-full flex justify-around place-items-center pt-4">
        <div className="avatar">
          <div className="w-40 h-40 max-[450px]:w-24 max-[450px]:h-24 rounded-full">
            <Image
              src={data.customer.user.avatar.data}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto aspect-square"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-4xl max-[450px]:text-3xl font-bold">
            {data.customer.user.name}
          </div>
          <div className="flex text-xl max-[450px]:text-lg font-semibold">
            <div>
              <div>Posts</div>
              <div>{data.customer.user.postCount}</div>
            </div>
            <div className="divider divider-horizontal" />
            <div>
              <div>Following</div>
              <div>{data.customer.followingCount}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCustomerProfile;
