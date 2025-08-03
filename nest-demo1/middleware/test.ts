import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(res, '测试中间件');
    next(); // 执行下一步
    res.send('测试中间件---被拦截了');
  }
}

export default TestMiddleware;
