import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class AccountTestInput {
  @Field()
  account: string;
}
