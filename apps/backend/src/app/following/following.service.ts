import { ForbiddenException, Injectable } from '@nestjs/common';
import { FollowInput } from './dto/input/follow.input';
import { Customer } from '../user/customer/models/customer.entity';
import { StoreService } from '../user/store/store.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FollowingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storeService: StoreService
  ) {}

  async follow(currentId: string, followInput: FollowInput): Promise<string> {
    this.prisma.following
      .create({
        data: {
          customerId: currentId,
          storeId: await this.storeService.getStoreIdByAccount(
            followInput.storeAccount
          ),
        },
      })
      .catch((err) => {
        throw new ForbiddenException(err, 'failed to follow store');
      });

    return 'Followed successfully';
  }

  unfollow(user: Customer, unfollowInput: FollowInput): string {
    console.log('current user: ' + user.user.name);
    console.log('unfollowed store account: ' + unfollowInput.storeAccount);
    return 'Unfollowed successfully';
  }
}
