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

// // 自定义依赖注入中间件 test
// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import TestMiddleware from 'middleware/test';
// export class UserModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     // consumer.apply(TestMiddleware).forRoutes('user/find');
//     // .forRoutes({ path: 'user', method: RequestMethod.GET });
//     consumer.apply(TestMiddleware).forRoutes(UserController);
//   }
// }
