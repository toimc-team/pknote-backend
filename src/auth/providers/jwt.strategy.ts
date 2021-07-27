import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import * as config from 'config';
import { UserInfo } from '@/entity/UserInfo';

@Injectable()
export class JwtStragegy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || config.get('jwt.secret'),
    });
  }

  async validate(payload: JwtPayload): Promise<UserInfo> {
    const { userId } = payload;
    const user = await this.userRepository.findOne({ userId });
    if (!user) {
      throw new UnauthorizedException();
    }
    // user 将会放入 Request 中
    return user;
  }
}
