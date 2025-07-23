import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Param,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() request) {
    console.log(request.query, '==query==');
    return {
      code: 0,
      msg: 'success',
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
