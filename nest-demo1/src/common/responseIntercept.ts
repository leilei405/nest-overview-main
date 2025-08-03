import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';

/**
 * @author Lucky
 * @description 响应拦截器
 * @description 拦截所有的响应，将响应数据包装成 { code: 200, data: any } 的格式
 */
@Injectable()
class ResponseIntercept implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          code: 200,
          data,
        };
      }),
    );
  }
}

export { ResponseIntercept };
