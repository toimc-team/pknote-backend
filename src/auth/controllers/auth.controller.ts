import { Controller, Post, Body } from '@nestjs/common';
import { AuthCredentialsDto } from '../providers/dto/auth-credentials.dto';
import { AuthService } from '../providers/auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginByPwdDto } from '../providers/dto/login-by-pwd.dto';

@ApiTags('用户')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @ApiOperation({ summary: '验证码注册' })
  register(@Body() authCredentialsDto: AuthCredentialsDto): Promise<any> {
    return this.authService.register(authCredentialsDto);
  }

  @Post('/signin')
  @ApiOperation({ summary: '账号密码登录' })
  loginByPwd(
    @Body() loginData: LoginByPwdDto,
  ): Promise<{ accessToken: string; user: unknown }> {
    return this.authService.loginByPwd(loginData);
  }

  @Post('/sendCode')
  @ApiOperation({ summary: '发送短信验证码' })
  sendCode(@Body('phone') phone: string): Promise<any> {
    return this.authService.sendCode(phone);
  }
}
