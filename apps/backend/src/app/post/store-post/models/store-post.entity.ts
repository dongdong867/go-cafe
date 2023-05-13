import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from '../../models/post.entity';

@ObjectType()
export class StorePost extends Post {
  @Field()
  title: string;
}
