export const CustomerPostSelect = {
  id: true,
  post: {
    select: {
      body: true,
      postPicture: {
        select: {
          picture: {
            select: {
              data: true,
            },
          },
        },
      },
    },
  },
  rating: true,
  store: {
    select: {
      user: {
        select: {
          account: true,
          name: true,
          phone: true,
          postCount: true,
          avatar: {
            select: {
              data: true,
            },
          },
        },
      },
      storeRating: {
        select: {
          postCount: true,
          rating: {
            select: {
              general: true,
              environment: true,
              meals: true,
              attitude: true,
            },
          },
        },
      },
      address: true,
      info: true,
    },
  },
  customer: {
    select: {
      user: {
        select: {
          account: true,
          name: true,
          phone: true,
          postCount: true,
          avatar: {
            select: {
              data: true,
            },
          },
        },
      },
      followingCount: true,
      email: true,
    },
  },
};
