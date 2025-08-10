import { Injectable } from '@nestjs/common';
import { CreateDemoWinstonDto } from './dto/create-demo-winston.dto';
import { UpdateDemoWinstonDto } from './dto/update-demo-winston.dto';

@Injectable()
export class DemoWinstonService {
  create(createDemoWinstonDto: CreateDemoWinstonDto) {
    return 'This action adds a new demoWinston';
  }

  findAll() {
    return `This action returns all demoWinston`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demoWinston`;
  }

  update(id: number, updateDemoWinstonDto: UpdateDemoWinstonDto) {
    return `This action updates a #${id} demoWinston`;
  }

  remove(id: number) {
    return `This action removes a #${id} demoWinston`;
  }
}
