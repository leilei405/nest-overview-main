import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemoWinstonService } from './demo-winston.service';
import { CreateDemoWinstonDto } from './dto/create-demo-winston.dto';
import { UpdateDemoWinstonDto } from './dto/update-demo-winston.dto';

@Controller('demo-winston')
export class DemoWinstonController {
  constructor(private readonly demoWinstonService: DemoWinstonService) {}

  @Post()
  create(@Body() createDemoWinstonDto: CreateDemoWinstonDto) {
    return this.demoWinstonService.create(createDemoWinstonDto);
  }

  @Get()
  findAll() {
    return this.demoWinstonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demoWinstonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemoWinstonDto: UpdateDemoWinstonDto) {
    return this.demoWinstonService.update(+id, updateDemoWinstonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoWinstonService.remove(+id);
  }
}
