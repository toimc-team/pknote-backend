import { HttpException, HttpStatus } from '@nestjs/common';
export class CodeExpireException extends HttpException {
  constructor() {
    super('验证码不正确或者过期，请重新发送', HttpStatus.FORBIDDEN);
  }
}
