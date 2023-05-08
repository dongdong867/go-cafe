import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FollowInput } from './dto/input/follow.input';
import { UnfollowInput } from './dto/input/unfollow.input';

@Resolver()
export class FollowingResolver {
  @Mutation(() => String)
  follow(@Args('followInput') followInput: FollowInput) {
    return 'Followed successfully';
  }

  @Mutation(() => String)
  unfollow(@Args('unfollowInput') unfollowInput: UnfollowInput) {
    return 'Unfollowed successfully';
  }
}
