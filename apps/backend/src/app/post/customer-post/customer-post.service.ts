import { Injectable } from '@nestjs/common';
import { CustomerPost } from './models/customer-post.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { StoreService } from '../../user/store/store.service';
import { CreateCustomerPostInput } from './dto/input/create-customer-post.input';
import { UpdateCustomerPostInput } from './dto/input/update-customer-post.input';
import { DeleteCustomerPostInput } from './dto/input/delete-customer-post.input';

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

  async updateCustomerPost(
    currentId: string,
    updateCustomerPostInput: UpdateCustomerPostInput
  ): Promise<string> {
    await this.prisma.customerPost.update({
      where: {
        id_customerId: {
          id: updateCustomerPostInput.id,
          customerId: currentId,
        },
      },
      data: {
        post: {
          update: {
            body: updateCustomerPostInput.body,
          },
        },
        rating: {
          update: updateCustomerPostInput.rating,
        },
      },
    });

    return 'post updated successfully';
  }

  async deleteCustomerPost(
    currentId: string,
    deleteCustomerPostInput: DeleteCustomerPostInput
  ): Promise<string> {
    const data = await this.prisma.customerPost.findUniqueOrThrow({
      where: {
        id_customerId: {
          id: deleteCustomerPostInput.postId,
          customerId: currentId,
        },
      },
      select: {
        postId: true,
        ratingId: true,
        post: {
          select: {
            postPicture: {
              select: {
                pictureId: true,
              },
            },
          },
        },
      },
    });

    console.log(data);

    const deletePost = this.prisma.post.delete({
      where: {
        id: data.postId,
      },
    });

    const deletePostPicture = this.prisma.postPicture.deleteMany({
      where: {
        postId: data.postId,
      },
    });

    const deletePicture = this.prisma.picture.deleteMany({
      where: {
        id: {
          in: data.post.postPicture.map((picture) => picture.pictureId),
        },
      },
    });

    const deleteRating = this.prisma.rating.delete({
      where: {
        id: data.ratingId,
      },
    });

    const deleteCustomerPost = this.prisma.customerPost.delete({
      where: {
        id_customerId: {
          id: deleteCustomerPostInput.postId,
          customerId: currentId,
        },
      },
    });

    await this.prisma.$transaction([
      deletePostPicture,
      deleteCustomerPost,
      deletePost,
      deleteRating,
      deletePicture,
    ]);

    return `post delete successfully`;
  }
}
