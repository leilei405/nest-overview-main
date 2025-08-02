import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Param,
  Headers,
  HttpCode,
  Inject,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Inject(UserService)
  private readonly userService: UserService;

  @Get()
  getHello(@Request() request) {
    console.log(request.query, '==query1==');
    return {
      code: 0,
      msg: this.userService.findAll(),
      data: {
        name: 'hello nest',
      },
    };
  }

  @Get(':id')
  @HttpCode(200)
  getParams(@Param() id, @Headers() headers) {
    console.log(id, '==id==');
    console.log(headers, '==headers==');
    return {
      code: 0,
      msg: 'success',
      data: {
        name: 'hello nest',
      },
    };
  }

  @Post()
  postHello(@Body() request) {
    console.log(request, '==body==');
    return {
      code: 0,
      msg: 'success',
      data: {
        name: '测试',
      },
    };
  }
}
