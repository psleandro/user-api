import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { NestResponse } from './nest-response';

@Injectable()
export class ResponseTransformerInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((controllerResponse: NestResponse) => {
        if (controllerResponse instanceof NestResponse) {
          const httpContext = context.switchToHttp();
          const response = httpContext.getResponse();
          const { status, headers, body } = controllerResponse;

          const headersNames = Object.getOwnPropertyNames(headers);
          headersNames.forEach((name) => {
            const headerValue = headers[name];
            this.httpAdapter.setHeader(response, name, headerValue);
          });

          this.httpAdapter.status(response, status);
          return body;
        }
        return controllerResponse;
      }),
    );
  }
}
