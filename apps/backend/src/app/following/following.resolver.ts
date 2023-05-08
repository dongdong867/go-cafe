import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FollowInput } from './dto/input/follow.input';
import { UnfollowInput } from './dto/input/unfollow.input';
import { FollowingService } from './following.service';

@Resolver()
export class FollowingResolver {
  constructor(private readonly followingService: FollowingService) {}

  @Mutation(() => String)
  follow(@Args('followInput') followInput: FollowInput) {
    return this.followingService.follow(followInput);
  }

  @Mutation(() => String)
  unfollow(@Args('unfollowInput') unfollowInput: UnfollowInput) {
    return this.followingService.unfollow(unfollowInput);
  }
}
