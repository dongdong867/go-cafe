import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    return GqlExecutionContext.create(context).getContext().req.user;
  }
);
