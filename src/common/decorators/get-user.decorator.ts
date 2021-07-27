import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserInfo } from '@/entity/UserInfo';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserInfo => {
    const req = ctx.switchToHttp().getRequest();
    console.log('user', req.user);
    return req.user;
  },
);
