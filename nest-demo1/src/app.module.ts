import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    UserModule,
    CourseModule,
    CourseModule.forRoot({
      globalUrl: '动态参数传入',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
