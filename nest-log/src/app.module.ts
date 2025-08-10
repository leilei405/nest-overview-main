import { join } from 'path';
import { Module, Logger, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoggerModule } from 'nestjs-pino';
@Global()
@Module({
  imports: [
    UserModule,
    // LoggerModule.forRoot({
    //   pinoHttp: {
    //     transport: {
    //       targets: [
    //         {
    //           level: 'info',
    //           target: 'pino-pretty',
    //           options: {
    //             colorize: true,
    //           },
    //         },
    //         {
    //           level: 'info',
    //           target: 'pino-roll',
    //           options: {
    //             file: join('logs', 'log.txt'),
    //             frequency: 'daily',
    //             mkdir: true,
    //             maxSize: '5m',
    //           },
    //         },
    //       ],
    //     },
    //     // process.env.NODE_ENV === 'development'
    //     //   ? {
    //     //       target: 'pino-pretty',
    //     //       options: {
    //     //         colorize: true,
    //     //       },
    //     //     }
    //     //   : {
    //     //       target: 'pino-roll',
    //     //       options: {
    //     //         file: 'log.txt',
    //     //         frequency: 'daily',
    //     //         mkdir: true,
    //     //       },
    //     //     },
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
  exports: [Logger],
})
export class AppModule {}
