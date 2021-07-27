import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({ description: '手机号码' })
  @IsString({ message: '必须是字符串！' })
  @Length(11)
  readonly phone: string;

  @ApiProperty({ description: '短信验证码' })
  @IsString({ message: '必须是字符串！' })
  @Length(6)
  readonly code: string;

  @ApiProperty({ description: '登录密码' })
  @IsString()
  @MinLength(6, { message: '密码长度不能小于6！' })
  @MaxLength(20, { message: '密码长度不能大于20！' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: '密码强度太低！',
  })
  readonly pwd: string;
}
