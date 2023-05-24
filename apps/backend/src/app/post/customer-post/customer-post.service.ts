import { Injectable } from '@nestjs/common';
import { CustomerPost } from './models/customer-post.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { StoreService } from '../../user/store/store.service';
import { CreateCustomerPostInput } from './dto/input/create-customer-post.input';
import { UpdateCustomerPostInput } from './dto/input/update-customer-post.input';
import { DeleteCustomerPostInput } from './dto/input/delete-customer-post.input';
import { StoreRating } from '../../user/store/models/store-rating.entity';
import { GetCustomerPostArgs } from './dto/args/get-customer-post.args';
import { CustomerPostSelect } from './dto/select/customer-post.select';
import { GetCustomerPostAtStoreArgs } from './dto/args/get-customer-post-at-store.args';

@Injectable()
export class CustomerPostService {
  constructor(
    // private readonly ratingService: RatingService,
    private readonly storeService: StoreService,
    private readonly prisma: PrismaService
  ) {}

  async getPost(
    currentId: string,
    getCustomerPostArgs: GetCustomerPostArgs
  ): Promise<CustomerPost> {
    return await this.prisma.customerPost.findUniqueOrThrow({
      where: {
        id_customerId: {
          id: getCustomerPostArgs.postId,
          customerId: currentId,
        },
      },
      select: CustomerPostSelect,
    });
  }

  async getPosts(currentId: string): Promise<CustomerPost[]> {
    await this.prisma.customer.findUniqueOrThrow({
      where: {
        id: currentId,
      },
    });
    const data = await this.prisma.customerPost.findMany({
      select: CustomerPostSelect,
    });
    return data;
  }

  async getSelfPosts(currentId: string): Promise<CustomerPost[]> {
    return await this.prisma.customerPost.findMany({
      where: {
        customerId: currentId,
      },
      select: CustomerPostSelect,
    });
  }

  async getPostsByStoreAccount(
    currentId: string,
    getCustomerPostAtStoreArgs: GetCustomerPostAtStoreArgs
  ): Promise<CustomerPost[]> {
    await this.prisma.customer.findUniqueOrThrow({
      where: {
        id: currentId,
      },
    });
    return await this.prisma.customerPost.findMany({
      where: {
        storeId: await this.storeService.getStoreIdByAccount(
          getCustomerPostAtStoreArgs.storeAccount
        ),
      },
      select: CustomerPostSelect,
    });
  }

  async createCustomerPost(
    currentId: string,
    createUserPostInput: CreateCustomerPostInput
  ): Promise<string> {
    const storeId: string = await this.storeService.getStoreIdByAccount(
      createUserPostInput.storeAccount
    );

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
            id: storeId,
          },
        },
      },
    });

    await this.prisma.customer.update({
      where: {
        id: currentId,
      },
      data: {
        user: {
          update: {
            postCount: {
              increment: 1,
            },
          },
        },
      },
    });

    const storeRating: StoreRating =
      await this.prisma.storeRating.findUniqueOrThrow({
        where: {
          storeId: storeId,
        },
        select: {
          rating: true,
          postCount: true,
        },
      });

    await this.prisma.storeRating.update({
      where: {
        storeId: storeId,
      },
      data: {
        postCount: {
          increment: 1,
        },
        rating: {
          update: {
            general:
              (storeRating.rating.general * storeRating.postCount +
                createUserPostInput.rating.general) /
              (storeRating.postCount + 1),
            environment:
              (storeRating.rating.environment * storeRating.postCount +
                createUserPostInput.rating.environment) /
              (storeRating.postCount + 1),
            meals:
              (storeRating.rating.meals * storeRating.postCount +
                createUserPostInput.rating.meals) /
              (storeRating.postCount + 1),
            attitude:
              (storeRating.rating.attitude * storeRating.postCount +
                createUserPostInput.rating.attitude) /
              (storeRating.postCount + 1),
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
    const data = await this.prisma.customerPost.findUniqueOrThrow({
      where: {
        id_customerId: {
          id: updateCustomerPostInput.id,
          customerId: currentId,
        },
      },
      select: {
        storeId: true,
        rating: true,
        store: {
          select: {
            storeRating: {
              select: {
                postCount: true,
                rating: true,
              },
            },
          },
        },
      },
    });

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
        store: {
          update: {
            storeRating: {
              update: {
                rating: {
                  update: {
                    general:
                      (data.store.storeRating.rating.general *
                        data.store.storeRating.postCount -
                        data.rating.general +
                        updateCustomerPostInput.rating.general) /
                      data.store.storeRating.postCount,
                    environment:
                      (data.store.storeRating.rating.environment *
                        data.store.storeRating.postCount -
                        data.rating.environment +
                        updateCustomerPostInput.rating.environment) /
                      data.store.storeRating.postCount,
                    meals:
                      (data.store.storeRating.rating.meals *
                        data.store.storeRating.postCount -
                        data.rating.meals +
                        updateCustomerPostInput.rating.meals) /
                      data.store.storeRating.postCount,
                    attitude:
                      (data.store.storeRating.rating.attitude *
                        data.store.storeRating.postCount -
                        data.rating.attitude +
                        updateCustomerPostInput.rating.attitude) /
                      data.store.storeRating.postCount,
                  },
                },
              },
            },
          },
        },
      },
      select: {
        storeId: true,
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
        storeId: true,
        rating: true,
        post: {
          select: {
            postPicture: {
              select: {
                pictureId: true,
              },
            },
          },
        },
        store: {
          select: {
            storeRating: {
              select: {
                postCount: true,
                rating: true,
              },
            },
          },
        },
      },
    });

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

    await this.prisma.storeRating.update({
      where: {
        storeId: data.storeId,
      },
      data: {
        postCount: {
          decrement: 1,
        },
        rating: {
          update: {
            general:
              (data.store.storeRating.rating.general *
                data.store.storeRating.postCount -
                data.rating.general) /
              (data.store.storeRating.postCount - 1),
            environment:
              (data.store.storeRating.rating.environment *
                data.store.storeRating.postCount -
                data.rating.environment) /
              (data.store.storeRating.postCount - 1),
            meals:
              (data.store.storeRating.rating.meals *
                data.store.storeRating.postCount -
                data.rating.meals) /
              (data.store.storeRating.postCount - 1),
            attitude:
              (data.store.storeRating.rating.attitude *
                data.store.storeRating.postCount -
                data.rating.attitude) /
              (data.store.storeRating.postCount - 1),
          },
        },
      },
    });

    return `post delete successfully`;
  }
}
