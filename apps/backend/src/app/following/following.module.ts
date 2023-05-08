import { Module } from '@nestjs/common';
import { FollowingService } from './following.service';
import { FollowingResolver } from './following.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [FollowingService, FollowingResolver],
})
export class FollowingModule {}
