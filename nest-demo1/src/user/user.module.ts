import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CourseModule } from 'src/course/course.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [CourseModule],
})
export class UserModule {}
