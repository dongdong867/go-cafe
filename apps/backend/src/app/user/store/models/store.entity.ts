import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../models/user.entity';

@ObjectType()
export class Store extends User {
  @Field()
  address: string;

  @Field()
  info: string;
}
