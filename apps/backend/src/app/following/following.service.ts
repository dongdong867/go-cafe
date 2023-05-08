import { Injectable } from '@nestjs/common';
import { FollowInput } from './dto/input/follow.input';
import { UserService } from '../user/user.service';
import { UnfollowInput } from './dto/input/unfollow.input';

@Injectable()
export class FollowingService {
  constructor(private readonly userService: UserService) {}

  follow(followInput: FollowInput): String {
    if (!this.userService.certifyUser(followInput.account, followInput.token))
      throw new Error('invalidate user token');

    console.log('followed store account: ' + followInput.storeAccount);
    return 'Followed successfully';
  }

  unfollow(unfollowInput: UnfollowInput) {
    if (
      !this.userService.certifyUser(unfollowInput.account, unfollowInput.token)
    )
      throw new Error('invalidate user token');

    console.log('unfollowed store account: ' + unfollowInput.storeAccount);
    return 'Unfollowed successfully';
  }
}
