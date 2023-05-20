import { Injectable } from '@nestjs/common';
import { FollowInput } from './dto/input/follow.input';
import { StoreService } from '../user/store/store.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FollowingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storeService: StoreService
  ) {}

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
