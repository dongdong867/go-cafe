import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class StoreGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { role } = GqlExecutionContext.create(context).getContext().req;

    if (role !== 'store') {
      throw new UnauthorizedException(
        'You do not have permission to access this resource.'
      );
    }
    return true;
  }
}

@Injectable()
export class CustomerGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { role } = GqlExecutionContext.create(context).getContext().req;

    if (role !== 'customer') {
      throw new UnauthorizedException(
        'You do not have permission to access this resource.'
      );
    }
    return true;
  }
}
