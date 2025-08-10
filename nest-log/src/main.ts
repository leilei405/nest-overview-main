import { NestFactory } from '@nestjs/core';
import { createLogger } from 'winston';
import { join } from 'path';
import * as winston from 'winston';
import { AppModule } from './app.module';
import { utilities, WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';

async function bootstrap() {
  // winston 自定义日志
  const instance = createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike(),
        ),
      }), // 日志写入控制台
      new winston.transports.File({ filename: join('logs', 'winston.txt') }), // 所有日志都写入 winston.txt 文件
      new winston.transports.DailyRotateFile({
        level: 'warn',
        dirname: 'logs',
        // filename: join('logs', 'winston-%DATE%.log'),
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
      }), // 日志写入文件，每天生成一个文件，文件大小超过 20m 就压缩，保留 14 天
    ],
  });
  const app = await NestFactory.create(AppModule, {
    // logger: false, // 关闭所有日志
    // logger: ['error', 'warn', 'log', 'debug', 'verbose'], // 开启指定日志
    logger: WinstonModule.createLogger({
      instance,
    }),
  });
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
