import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetStoreArgs {
  @Field()
  account: string;
}
