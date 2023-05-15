import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsEmail, IsUUID } from 'class-validator';

@InputType()
export class UpdateCustomerInput {
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  phone?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  // TODO: FEATURE WAITING
  //
  // @Field()
  // @IsOptional()
  // avatar: string
}
