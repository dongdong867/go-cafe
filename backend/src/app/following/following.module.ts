import { Module } from '@nestjs/common';
import { FollowingService } from './following.service';
import { FollowingResolver } from './following.resolver';
import { UserModule } from '../user/user.module';
import { StoreModule } from '../user/store/store.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule, StoreModule],
  providers: [FollowingService, FollowingResolver],
})
export class FollowingModule {}
