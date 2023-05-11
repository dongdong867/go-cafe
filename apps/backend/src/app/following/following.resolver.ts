import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FollowInput } from './dto/input/follow.input';
import { FollowingService } from './following.service';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user/guards/user-auth.guard';
import { CustomerGuard } from '../user/guards/role.guard';
import { CurrentUser } from '../user/decorator/current-user.decorator';
import { Customer } from '../user/customer/models/customer.entity';

@UseGuards(UserAuthGuard, CustomerGuard)
@Resolver()
export class FollowingResolver {
  constructor(private readonly followingService: FollowingService) {}

  @Mutation(() => String)
  follow(
    @CurrentUser() user: Customer,
    @Args('followInput') followInput: FollowInput
  ) {
    return this.followingService.follow(user, followInput);
  }

  @Mutation(() => String)
  unfollow(
    @CurrentUser() user: Customer,
    @Args('unfollowInput') unfollowInput: FollowInput
  ) {
    return this.followingService.unfollow(user, unfollowInput);
  }
}
