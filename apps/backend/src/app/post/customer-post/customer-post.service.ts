import { Injectable } from '@nestjs/common';
import { CustomerPost } from './models/customer-post.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { StoreService } from '../../user/store/store.service';
import { CreateCustomerPostInput } from './dto/input/create-customer-post.input';

@Injectable()
export class CustomerPostService {
  constructor(
    // private readonly ratingService: RatingService,
    private readonly storeService: StoreService,
    private readonly prisma: PrismaService
  ) {}

  async getPosts(currentId: string): Promise<CustomerPost[]> {
    const data = await this.prisma.customer.findUniqueOrThrow({
      where: {
        id: currentId,
      },
      select: {
        customerPost: {
          select: {
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
            rating: {
              select: {
                general: true,
                environment: true,
                meals: true,
                attitude: true,
              },
            },
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
          },
        },
      },
    });
    return data.customerPost;
  }

  async createCustomerPost(
    currentId: string,
    createUserPostInput: CreateCustomerPostInput
  ): Promise<string> {
    await this.prisma.customerPost.create({
      data: {
        post: {
          create: {
            body: createUserPostInput.body,
            postPicture: {
              create: createUserPostInput.pictures.map((picture) => ({
                picture: { create: { data: picture } },
              })),
            },
          },
        },
        rating: {
          create: {
            general: createUserPostInput.rating.general,
            environment: createUserPostInput.rating.environment,
            meals: createUserPostInput.rating.meals,
            attitude: createUserPostInput.rating.attitude,
          },
        },
        customer: {
          connect: {
            id: currentId,
          },
        },
        store: {
          connect: {
            id: await this.storeService.getStoreIdByAccount(
              createUserPostInput.storeAccount
            ),
          },
        },
      },
    });

    return 'post created successfully';
  }

  // updateUserPost(
  //   currentUser: Customer,
  //   updateUserPostInput: UpdateUserPostInput
  // ): UserPost {
  //   const originPost: UserPost = {
  //     id: 'postId1',
  //     userAccount: 'user 1',
  //     storeAccount: 'store 1',
  //     body: 'this is a fake body',
  //     rating: {
  //       general: 4,
  //       environment: 3,
  //       meals: 3,
  //       attitude: 2,
  //     },
  //   };
  //   const newPost: UserPost = {
  //     userAccount: currentUser.account,
  //     storeAccount: 'test update store account',
  //     ...updateUserPostInput,
  //   };

  //   const storeId = this.storeService.getStoreIdByAccount(
  //     updateUserPostInput.storeAccount
  //   );
  //   this.ratingService.deleteRating(storeId, originPost.rating);
  //   this.ratingService.addRating(storeId, updateUserPostInput.rating);

  //   return newPost;
  // }

  // async deleteUserPost(
  //   currentUser: Customer,
  //   deleteUserPostInput: DeleteUserPostInput
  // ): Promise<string> {
  //   const originPost: CustomerPost = {
  //     id: 'postId1',
  //     userAccount: 'user 1',
  //     storeAccount: 'store 1',
  //     body: 'this is a fake body',
  //     rating: {
  //       general: 4,
  //       environment: 3,
  //       meals: 3,
  //       attitude: 2,
  //     },
  //   };

  //   this.ratingService.deleteRating(
  //     await this.storeService.getStoreIdByAccount(originPost.storeAccount),
  //     originPost.rating
  //   );

  //   return `delete post id: ${deleteUserPostInput.postId} successful`;
  // }
}
