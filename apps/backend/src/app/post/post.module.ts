import { Module } from '@nestjs/common';
import { StorePostModule } from './store-post/store-post.module';
import { UserPostModule } from './user-post/user-post.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [StorePostModule, UserPostModule, UserModule],
})
export class PostModule {}
