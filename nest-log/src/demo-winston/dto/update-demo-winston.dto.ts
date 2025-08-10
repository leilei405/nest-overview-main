import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoWinstonDto } from './create-demo-winston.dto';

export class UpdateDemoWinstonDto extends PartialType(CreateDemoWinstonDto) {}
