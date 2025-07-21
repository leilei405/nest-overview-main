import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() request) {
    console.log(request.query, '==前端传递过来的参数从request.query中获取==');
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
    console.log(request, '==前端传递过来的参数从request.body中获取==');
    return {
      code: 0,
      msg: 'success',
      data: {
        name: '测试',
      },
    };
  }
}
