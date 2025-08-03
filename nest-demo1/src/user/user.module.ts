import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CourseModule } from 'src/course/course.module';
import TestMiddleware from 'middleware/test';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [CourseModule],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(TestMiddleware).forRoutes('user/find');
    // .forRoutes({ path: 'user', method: RequestMethod.GET });
    consumer.apply(TestMiddleware).forRoutes(UserController);
  }
}
