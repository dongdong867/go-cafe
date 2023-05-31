import { Injectable } from '@nestjs/common';
import { GetStorePostArgs } from './dto/args/get-store-post.args';
import { DeleteStorePostInput } from './dto/input/delete-store-post.input';
import { PrismaService } from '../../prisma/prisma.service';
import { StorePost } from './models/store-post.entity';
import { StoreService } from '../../user/store/store.service';
import { CreateStorePostInput } from './dto/input/create-store-post.input';
import { UpdateStorePostInput } from './dto/input/update-store-post.input';
import { Picture } from '@prisma/client';
import { StorePostSelect } from './dto/select/store-post.select';

@Injectable()
export class StorePostService {
  constructor(
    private readonly storeService: StoreService,
    private readonly prisma: PrismaService
  ) {}

  async getSelfPost(currentId: string): Promise<StorePost[]> {
    const data = await this.prisma.store.findUniqueOrThrow({
      where: {
        id: currentId,
      },
      select: {
        storePost: {
          select: StorePostSelect,
          orderBy: {
            post: {
              updateAt: 'desc',
            },
          },
        },
      },
    });

    return data.storePost;
  }

  async getPosts(getStorePostArgs: GetStorePostArgs): Promise<StorePost[]> {
    const data = await this.prisma.store.findUniqueOrThrow({
      where: {
        id: await this.storeService.getStoreIdByAccount(
          getStorePostArgs.storeAccount
        ),
      },
      select: {
        storePost: {
          select: StorePostSelect,
          orderBy: {
            post: {
              updateAt: 'desc',
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

    await this.prisma.store.update({
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

    return 'post create successfully';
  }

  async updateStorePost(
    currentId: string,
    updateStorePostInput: UpdateStorePostInput
  ): Promise<string> {
    const data = await this.prisma.storePost.findUniqueOrThrow({
      where: {
        id_storeId: {
          id: updateStorePostInput.id,
          storeId: currentId,
        },
      },
      select: {
        post: {
          select: {
            id: true,
            postPicture: {
              select: {
                picture: true,
              },
            },
          },
        },
      },
    });

    const addList: string[] = [];
    const deleteList: Picture[] = [];

    for (const picture of data.post.postPicture.map(
      (postPicture) => postPicture.picture
    )) {
      if (!updateStorePostInput.pictureList.includes(picture.data))
        deleteList.push(picture);
    }

    const originPictureUrlList = data.post.postPicture.map(
      (picture) => picture.picture.data
    );

    updateStorePostInput.pictureList.forEach((picture) => {
      if (!originPictureUrlList.includes(picture)) addList.push(picture);
    });

    await this.prisma.storePost.update({
      where: {
        id_storeId: {
          id: updateStorePostInput.id,
          storeId: currentId,
        },
      },
      data: {
        title: updateStorePostInput.title,
        post: {
          update: {
            body: updateStorePostInput.body,
            postPicture: {
              create: addList.map((picture) => {
                return {
                  picture: {
                    create: {
                      data: picture,
                    },
                  },
                };
              }),
              delete: deleteList.map((picture) => {
                return {
                  pictureId_postId: {
                    pictureId: picture.id,
                    postId: data.post.id,
                  },
                };
              }),
            },
          },
        },
      },
    });

    return 'post update successfully';
  }

  async deleteStorePost(
    currentId: string,
    deleteStorePostInput: DeleteStorePostInput
  ): Promise<string> {
    const data = await this.prisma.storePost.findUniqueOrThrow({
      where: {
        id_storeId: {
          id: deleteStorePostInput.id,
          storeId: currentId,
        },
      },
      select: {
        postId: true,
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

    await this.prisma.store.update({
      where: {
        id: currentId,
      },
      data: {
        user: {
          update: {
            postCount: {
              decrement: 1,
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

    const deleteStorePost = this.prisma.storePost.delete({
      where: {
        id_storeId: {
          id: deleteStorePostInput.id,
          storeId: currentId,
        },
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

    await this.prisma.$transaction([
      deletePostPicture,
      deleteStorePost,
      deletePost,
      deletePicture,
    ]);

    return `post delete successfully`;
  }
}
