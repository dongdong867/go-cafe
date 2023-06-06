import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from '../../models/post.entity';

@ObjectType()
export class StorePost {
  @Field(() => ID)
  id: string;

  @Field(() => Post)
  post: Post;

  @Field()
  title: string;
}
