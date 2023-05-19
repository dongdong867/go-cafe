import { Module } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPostResolver } from './user-post.resolver';
import { UserModule } from '../../user/user.module';
import { RatingModule } from '../../rating/rating.module';
import { RatingService } from '../../rating/rating.service';

@Module({
  imports: [UserModule, RatingModule],
  providers: [UserPostResolver, UserPostService],
})
export class UserPostModule {}
