import { Injectable } from '@nestjs/common';
import { GetStorePostArgs } from './dto/args/get-store-post.args';
import { Store } from '../../user/store/models/store.entity';
import { DeleteStorePostInput } from './dto/input/delete-store-post.input';
import { PrismaService } from '../../prisma/prisma.service';
import { StorePost } from './models/store-post.entity';
import { StoreService } from '../../user/store/store.service';
import { CreateStorePostInput } from './dto/input/create-store-post.input';

@Injectable()
export class StorePostService {
  constructor(
    private readonly storeService: StoreService,
    private readonly prisma: PrismaService
  ) {}
  async getPosts(getStorePostArgs: GetStorePostArgs): Promise<StorePost[]> {
    const data = await this.prisma.store.findUniqueOrThrow({
      where: {
        id: await this.storeService.getStoreIdByAccount(
          getStorePostArgs.storeAccount
        ),
      },
      select: {
        storePost: {
          select: {
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
          },
        },
      },
    });

    return data.storePost;
  }

  async createStorePost(
    currentId: string,
    createStorePostInput: CreateStorePostInput
  ): Promise<string> {
    await this.prisma.storePost.create({
      data: {
        title: createStorePostInput.title,
        post: {
          create: {
            body: createStorePostInput.body,
            postPicture: {
              create: createStorePostInput.pictures.map((picture) => ({
                picture: { create: { data: picture } },
              })),
            },
          },
        },
        store: {
          connect: {
            id: currentId,
          },
        },
      },
    });

    return 'post create successfully';
  }

  // updateStorePost(
  //   currentUser: Store,
  //   updateStorePostInput: UpdateStorePostInput
  // ): StorePost {
  //   const post: StorePost = {
  //     storeAccount: currentUser.account,
  //     ...updateStorePostInput,
  //   };

  //   return post;
  // }

  // deleteStorePost(
  //   currentUser: Store,
  //   deleteStorePostInput: DeleteStorePostInput
  // ): string {
  //   return `delete store post ${deleteStorePostInput.id} successfully`;
  // }
}
