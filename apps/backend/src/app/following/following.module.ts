import { Module } from '@nestjs/common';
import { FollowingService } from './following.service';
import { FollowingResolver } from './following.resolver';

@Module({
  providers: [FollowingService, FollowingResolver],
})
export class FollowingModule {}
