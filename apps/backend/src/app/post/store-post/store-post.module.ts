import { Module } from '@nestjs/common';
import { StorePostService } from './store-post.service';
import { StorePostResolver } from './store-post.resolver';
import { UserModule } from '../../user/user.module';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  providers: [StorePostResolver, StorePostService],
})
export class StorePostModule {}
