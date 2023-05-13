import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { FollowingModule } from './following/following.module';
import { MenuModule } from './menu/menu.module';
import { PostModule } from './post/post.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'apps/backend/src/graphql/schema.gql',
      sortSchema: true,
      context: ({ req }) => ({ header: req.header }),
    }),
    UserModule,
    FollowingModule,
    MenuModule,
    PostModule,
    RatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
