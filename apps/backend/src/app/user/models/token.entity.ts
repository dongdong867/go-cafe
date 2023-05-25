import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Token {
  @Field(() => ID)
  token: string;

  @Field()
  role: string;
}
