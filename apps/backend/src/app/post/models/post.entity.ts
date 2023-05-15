import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  id: string;

  @Field()
  storeAccount: string;

  @Field()
  body: string;

  // TODO: FEATURE WAITING
  //
  // @Field(() => [Picture])
  // picture: Picture[]
}
