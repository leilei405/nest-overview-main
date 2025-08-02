import { DynamicModule, Global, Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

interface Options {
  globalUrl: string;
}
@Global()
@Module({})
export class CourseModule {
  static forRoot(options: Options): DynamicModule {
    return {
      module: CourseModule,
      controllers: [CourseController],
      providers: [
        CourseService,
        {
          provide: 'GLOBAL_COURSE_SERVICE',
          useValue: {
            globalUrl: [
              options.globalUrl,
              'https://www.baidu1.com',
              'https://www.baidu2.com',
            ],
          },
        },
      ],
      exports: [
        CourseService,
        {
          provide: 'GLOBAL_COURSE_SERVICE',
          useValue: {
            globalUrl: [
              options.globalUrl,
              'https://www.baidu1.com',
              'https://www.baidu2.com',
            ],
          },
        },
      ],
    };
  }
}
