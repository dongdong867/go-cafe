import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetStoresArgs {
  @Field(() => [String])
  accounts: string[];
}
