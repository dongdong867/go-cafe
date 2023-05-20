import { Injectable } from '@nestjs/common';
import { GetStorePostArgs } from './dto/args/get-store-post.args';
import { Store } from '../../user/store/models/store.entity';
import { DeleteStorePostInput } from './dto/input/delete-store-post.input';
import { PrismaService } from '../../prisma/prisma.service';
import { StorePost } from './models/store-post.entity';
import { StoreService } from '../../user/store/store.service';

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

  // createStorePost(
  //   currentUser: Store,
  //   createStorePostInput: CreateStorePostInput
  // ): StorePost {
  //   const post: StorePost = {
  //     id: uuidv4(),
  //     storeAccount: currentUser.account,
  //     ...createStorePostInput,
  //   };

  //   return post;
  // }

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
