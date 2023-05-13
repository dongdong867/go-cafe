import { Module } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPostResolver } from './user-post.resolver';
import { UserModule } from '../../user/user.module';

@Module({
  imports: [UserModule],
  providers: [UserPostResolver, UserPostService],
})
export class UserPostModule {}
