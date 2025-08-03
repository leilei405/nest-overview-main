import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const passPath = ['/api/user'];
function middlewareAll(req: Request, res: Response, next: NextFunction) {
  console.log('全局中间件执行了', req.originalUrl);
  if (passPath.includes(req.originalUrl)) {
    next();
    return;
  }
  res.send('user 才可以请求接口');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** 全局路由前缀 */
  app.setGlobalPrefix('api');
  /** 版本控制 */
  app.enableVersioning({ type: VersioningType.URI });
  /** 全局中间件 */
  app.use(middlewareAll);
  /** 跨域 - 允许所有来源 */
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
