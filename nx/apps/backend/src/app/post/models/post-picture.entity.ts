import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Picture {
  @Field()
  data: string;
}

@ObjectType()
export class PostPicture {
  @Field(() => Picture)
  picture: Picture;
}
