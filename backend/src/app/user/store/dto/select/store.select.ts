export const StoreSelect = {
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
  address: true,
  info: true,
  storeRating: {
    select: {
      rating: {
        select: {
          general: true,
          environment: true,
          meals: true,
          attitude: true,
        },
      },
      postCount: true,
    },
  },
};
