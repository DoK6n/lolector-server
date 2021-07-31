import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import clc from 'cli-color';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const { method, url } = request;
    const ctx = `${context.getClass().name} ➜ ${context.getHandler().name}()`;
    const now = Date.now();

    return next.handle().pipe(
      tap(response => {
        const ms = `+${Date.now() - now}ms`;
        this.logger.log(`${clc.bold(`${method} ${url}`)} ${clc.yellow(ms)}`, ctx);

        return response;
      }),
    );
  }
}
