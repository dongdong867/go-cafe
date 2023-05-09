import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = GqlExecutionContext.create(context).getContext().req;
    const authHeader = req.headers.authorization as string;

    console.log(authHeader);

    if (!authHeader) {
      throw new BadRequestException('Authorization header not found.');
    }

    const { isValidate, user } = this.userService.validateToken(authHeader);

    if (isValidate) {
      req.user = user;
      return true;
    }
    throw new UnauthorizedException('Token not valid');
  }
}