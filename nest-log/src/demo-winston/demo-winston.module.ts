import { Module } from '@nestjs/common';
import { DemoWinstonService } from './demo-winston.service';
import { DemoWinstonController } from './demo-winston.controller';

@Module({
  controllers: [DemoWinstonController],
  providers: [DemoWinstonService],
})
export class DemoWinstonModule {}
