export const StorePostSelect = {
  id: true,
  title: true,
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
};
