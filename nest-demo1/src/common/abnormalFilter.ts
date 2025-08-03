import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch, HttpException } from '@nestjs/common';

@Catch(HttpException)
class AbnormalFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // 获取请求的上下文
    const ctx = host.switchToHttp();
    // 获取响应对象
    const response = ctx.getResponse<Response>();
    // 获取请求对象
    const request = ctx.getRequest<Request>();
    // 获取异常状态码
    const status = exception.getStatus();
    // 获取异常消息
    const message = exception.message ? exception.message : '请求失败';

    (response as any).status(status).json({
      statusCode: -100,
      data: null,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}

export { AbnormalFilter };
