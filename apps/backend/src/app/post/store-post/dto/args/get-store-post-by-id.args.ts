import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetStorePostByIdArgs {
  @Field()
  postId: string;
}
