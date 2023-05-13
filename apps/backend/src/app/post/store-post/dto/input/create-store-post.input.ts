import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStorePostInput {
  @Field()
  title: string;

  @Field()
  body: string;

  // TODO: FEATURE WAITING
  //
  // @Field(() => [Picture])
  // pictures: Picture[]
}
