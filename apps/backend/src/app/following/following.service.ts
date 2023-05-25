import { Injectable } from '@nestjs/common';
import { FollowInput } from './dto/input/follow.input';
import { StoreService } from '../user/store/store.service';
import { PrismaService } from '../prisma/prisma.service';
import { Store } from '../user/store/models/store.entity';
import { GetIsFollowingArgs } from './dto/args/get-is-following.args';

@Injectable()
export class FollowingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storeService: StoreService
  ) {}

  async isFollowing(
    currentId: string,
    getIsFollowingArgs: GetIsFollowingArgs
  ): Promise<boolean> {
    const data = await this.prisma.following.findUnique({
      where: {
        customerId_storeId: {
          customerId: currentId,
          storeId: await this.storeService.getStoreIdByAccount(
            getIsFollowingArgs.storeAccount
          ),
        },
      },
      select: {
        storeId: true,
      },
    });

    return data ? true : false;
  }

  async getFollowingList(currentId: string): Promise<Store[]> {
    return (
      await this.prisma.following.findMany({
        where: {
          customerId: currentId,
        },
        select: {
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
              address: true,
              info: true,
              storeRating: {
                select: {
                  rating: true,
                  postCount: true,
                },
              },
            },
          },
        },
      })
    ).map((data) => data.store);
  }

  async follow(currentId: string, followInput: FollowInput): Promise<string> {
    const storeId: string = await this.storeService.getStoreIdByAccount(
      followInput.storeAccount
    );
    await this.prisma.following.create({
      data: {
        customerId: currentId,
        storeId: storeId,
      },
    });

    await this.prisma.customer.update({
      where: {
        id: currentId,
      },
      data: {
        followingCount: {
          increment: 1,
        },
      },
    });

    return 'Followed successfully';
  }

  async unfollow(
    currentId: string,
    unfollowInput: FollowInput
  ): Promise<string> {
    await this.prisma.following.delete({
      where: {
        customerId_storeId: {
          customerId: currentId,
          storeId: await this.storeService.getStoreIdByAccount(
            unfollowInput.storeAccount
          ),
        },
      },
    });

    await this.prisma.customer.update({
      where: {
        id: currentId,
      },
      data: {
        followingCount: {
          decrement: 1,
        },
      },
    });

    return 'unfollowed successfully';
  }
}
