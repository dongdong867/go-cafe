import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateStoreInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  info: string;

  @Field({ nullable: true })
  avatar: string;
}
