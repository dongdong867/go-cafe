import { Module } from '@nestjs/common';
import { UserModule } from '../../user/user.module';
import { RatingModule } from '../../rating/rating.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { CustomerPostService } from './customer-post.service';
import { CustomerPostResolver } from './customer-post.resolver';

@Module({
  imports: [UserModule, RatingModule, PrismaModule],
  providers: [CustomerPostResolver, CustomerPostService],
})
export class CustomerPostModule {}
