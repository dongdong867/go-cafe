import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetIsFollowingArgs {
  @Field()
  storeAccount: string;
}
