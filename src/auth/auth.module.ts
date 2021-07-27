import { Module } from '@nestjs/common';
import * as config from 'config';

import { AuthController } from './controllers/auth.controller';
import { AuthService } from './providers/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './providers/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStragegy } from './providers/jwt.strategy';
import { SmsService } from '@/common/providers/sms.service';
import { RedisClientService } from '@/common/providers/redis-client.service';

const jwtConfig = config.get('jwt');

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || jwtConfig.secret,
      signOptions: {
        expiresIn: jwtConfig.expiresIn,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, SmsService, JwtStragegy, RedisClientService],
  exports: [JwtStragegy, PassportModule],
})
export class AuthModule {}
