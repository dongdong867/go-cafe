import { ObjectType, Field } from '@nestjs/graphql';
import { PostPicture } from './post-picture.entity';

@ObjectType()
export class Post {
  @Field()
  body: string;

  @Field(() => [PostPicture])
  postPicture: PostPicture;
}
