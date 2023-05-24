import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FollowInput } from './dto/input/follow.input';
import { FollowingService } from './following.service';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user/guards/user-auth.guard';
import { CustomerGuard } from '../user/guards/role.guard';
import { CurrentId } from '../user/decorator/current-id.decorator';
import { Store } from '../user/store/models/store.entity';

@UseGuards(UserAuthGuard, CustomerGuard)
@Resolver()
export class FollowingResolver {
  constructor(private readonly followingService: FollowingService) {}

  @Query(() => [Store], { name: 'followingList', nullable: 'items' })
  async getFollowingList(@CurrentId() currentId: string): Promise<Store[]> {
    return await this.followingService.getFollowingList(currentId);
  }

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
