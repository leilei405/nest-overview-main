import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false, // 关闭所有日志
    logger: ['error', 'warn', 'log', 'debug', 'verbose'], // 开启指定日志
  });
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
