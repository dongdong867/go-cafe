import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FollowInput } from './dto/input/follow.input';
import { FollowingService } from './following.service';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user/guards/user-auth.guard';
import { CustomerGuard } from '../user/guards/role.guard';
import { Customer } from '../user/customer/models/customer.entity';
import { CurrentId } from '../user/decorator/current-id.decorator';

@UseGuards(UserAuthGuard, CustomerGuard)
@Resolver()
export class FollowingResolver {
  constructor(private readonly followingService: FollowingService) {}

  @Mutation(() => String)
  async follow(
    @CurrentId() currentId: string,
    @Args('followInput') followInput: FollowInput
  ): Promise<string> {
    return await this.followingService.follow(currentId, followInput);
  }

  @Mutation(() => String)
  async unfollow(
    @CurrentId() currentId: string,
    @Args('unfollowInput') unfollowInput: FollowInput
  ): Promise<string> {
    return await this.followingService.unfollow(currentId, unfollowInput);
  }
}
