import { Module } from '@nestjs/common';
import { StorePostModule } from './store-post/store-post.module';
import { UserModule } from '../user/user.module';
import { CustomerPostModule } from './customer-post/customer-post.module';

@Module({
  imports: [StorePostModule, CustomerPostModule, UserModule],
})
export class PostModule {}
