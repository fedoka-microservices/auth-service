import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('create.user.auth')
  registerUser(@Payload() createAuthDto: CreateAuthDto) {
    return  'register user from auth-service';
  }
  @MessagePattern('login.user.auth')
  loginUser(@Payload() createAuthDto: CreateAuthDto) {
    return  'loginUser user';
  }
  @MessagePattern('verify.user.auth')
  verifyUser(@Payload() createAuthDto: CreateAuthDto) {
    return  'verifyUser user';
  }
  @MessagePattern('logout.user.auth')
  logoutUser(@Payload() createAuthDto: CreateAuthDto) {
    return  'logoutUser user';
  }
}
