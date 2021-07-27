import { Repository, EntityRepository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { UserInfo } from '@/entity/UserInfo';
import { LoginByPwdDto } from './dto/login-by-pwd.dto';
@EntityRepository(UserInfo)
export class UserRepository extends Repository<UserInfo> {
  async register(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { phone, pwd } = authCredentialsDto;

    // const exists = this.findOne({ username })

    // if (exists) {
    //   // throw some error
    // }
    // const salt = await bcrypt.genSalt()
    // console.log('TCL: UserRepository -> salt', salt)

    // const user = new User()
    const user = this.create();
    user.phone = phone;
    user.salt = await bcrypt.genSalt();
    user.pwd = await this.hashPassword(pwd, user.salt);
    user.userId = uuid();

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateuserPassword(loginData: LoginByPwdDto): Promise<any> {
    const { phone, pwd } = loginData;
    const user = await this.findOne({ phone });

    if (user && (await user.validatePassword(pwd))) {
      // 删除敏感信息再返回，用这种结构的方式可以删除 user 表里的 salt 跟 pwd
      const { salt, pwd, ...userInfo } = user;
      return userInfo;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }
}
