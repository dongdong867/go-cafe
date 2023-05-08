import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateStoreInput {
  @Field()
  @IsNotEmpty()
  account: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  phone: string;

  @Field()
  @IsNotEmpty()
  address: string;

  @Field({ nullable: true })
  @IsOptional()
  info: string;

  // TODO: FEATURE WAITING
  //
  // @Field()
  // @IsNotEmpty()
  // avatar: string
}
