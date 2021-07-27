import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nestjs! This is Pknote Backend Service!';
  }
}
