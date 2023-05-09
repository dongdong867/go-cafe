import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/input/login.input';
import { JwtService } from '@nestjs/jwt';

@Resolver()
export class UserResolver {
  constructor(private readonly jwtService: JwtService) {}
  @Mutation(() => String)
  login(@Args('loginInput') loginInput: LoginInput): string {
    const accessToken = this.jwtService.sign({
      userAccount: loginInput.account,
      userPassword: loginInput.password,
    });

    return accessToken;
  }
}
