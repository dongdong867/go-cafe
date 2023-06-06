import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStoreInput {
  @Field()
  account: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  info: string;

  @Field()
  avatar: string;
}
