import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './utils/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(
    `successful-project-startup Port: ${PORT}; 访问地址 : http://localhost:${PORT}`,
  );
}
bootstrap();
