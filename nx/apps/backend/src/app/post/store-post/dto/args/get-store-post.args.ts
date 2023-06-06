import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetStorePostArgs {
  @Field()
  storeAccount: string;
}
