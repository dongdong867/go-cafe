import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStorePostInput {
  @Field()
  title: string;

  @Field()
  body: string;

  @Field(() => [String])
  pictures: string[];
}
