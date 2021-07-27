import {
  Injectable,
  UnauthorizedException,
  Logger,
  // HttpException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { SmsService } from '@/common/providers/sms.service';
import { RedisClientService } from '@/common/providers/redis-client.service';
import { HttpResponse } from '@/common/interfaces/http-response.interface';
import { CodeExpireException } from '@/common/exceptions/code-expire.exception';
import { LoginByPwdDto } from './dto/login-by-pwd.dto';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private smsService: SmsService,
    private redisClientService: RedisClientService,
  ) {}

  async register(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { phone, code } = authCredentialsDto;
    if (process.env.NODE_ENV === 'development' && code === '666666') {
      return this.userRepository.register(authCredentialsDto);
    }
    const result = await this.redisClientService.getValue(phone);
    if (!result || result != code) {
      throw new CodeExpireException();
    } else {
      // 否则使用过后，删除该key
      await this.redisClientService.delKey(phone);
    }
    return this.userRepository.register(authCredentialsDto);
  }

  async loginByPwd(
    loginData: LoginByPwdDto,
  ): Promise<{ accessToken: string; user: unknown }> {
    const user = await this.userRepository.validateuserPassword(loginData);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { userId } = user;
    const payload: JwtPayload = { userId };
    const accessToken: string = await this.jwtService.sign(payload);

    this.logger.debug(
      `Generator JWT token with payload ${JSON.stringify(payload)}`,
    );
    return { accessToken, user };
  }

  // 发送短信
  async sendCode(phone: string): Promise<HttpResponse> {
    const code = String(Math.random()).slice(-6);
    console.log('---> 验证码: ', code);
    await this.redisClientService.setValue(phone, code, 'EX', 60 * 10);
    const result = await this.smsService.sendCode(phone, code);
    // const result = 1;
    return {
      statusCode: result ? 0 : 1,
    };
  }
}
