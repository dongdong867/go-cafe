import { Injectable } from '@nestjs/common';
import { FollowInput } from './dto/input/follow.input';
import { Customer } from '../user/customer/models/customer.entity';

@Injectable()
export class FollowingService {
  follow(user: Customer, followInput: FollowInput): String {
    console.log('current user: ' + user.name);
    console.log('followed store account: ' + followInput.storeAccount);
    return 'Followed successfully';
  }

  unfollow(user: Customer, unfollowInput: FollowInput) {
    console.log('current user: ' + user.name);
    console.log('unfollowed store account: ' + unfollowInput.storeAccount);
    return 'Unfollowed successfully';
  }
}
