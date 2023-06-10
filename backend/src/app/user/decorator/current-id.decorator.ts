import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentId = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    return GqlExecutionContext.create(context).getContext().req.id;
  },
);
