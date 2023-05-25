import { Module } from '@nestjs/common';
import { UserModule } from '../../user/user.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { CustomerPostService } from './customer-post.service';
import { CustomerPostResolver } from './customer-post.resolver';

@Module({
  imports: [UserModule, PrismaModule],
  providers: [CustomerPostResolver, CustomerPostService],
})
export class CustomerPostModule {}
