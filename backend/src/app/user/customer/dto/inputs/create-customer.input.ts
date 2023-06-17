import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field()
  account: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  avatar: string;
}
