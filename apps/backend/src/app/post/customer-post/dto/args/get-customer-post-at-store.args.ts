import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetCustomerPostAtStoreArgs {
  @Field()
  storeAccount: string;
}
