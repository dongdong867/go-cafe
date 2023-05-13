import { Module } from '@nestjs/common';
import { StorePostService } from './store-post.service';
import { StorePostResolver } from './store-post.resolver';
import { UserModule } from '../../user/user.module';

@Module({
  imports: [UserModule],
  providers: [StorePostResolver, StorePostService],
})
export class StorePostModule {}
