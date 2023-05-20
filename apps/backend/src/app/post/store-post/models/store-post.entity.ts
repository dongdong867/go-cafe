import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from '../../models/post.entity';

@ObjectType()
export class StorePost {
  @Field(() => Post)
  post: Post;

  @Field()
  title: string;
}
