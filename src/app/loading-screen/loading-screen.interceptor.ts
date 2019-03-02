import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoadingScreenService } from './loading-screen.service';
import { finalize } from 'rxjs/operators';


@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {

  req: number = 0;

  constructor(private loadingScreenService: LoadingScreenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


      if (this.req === 0) {
        this.loadingScreenService.startLoading();
      }
      this.req++;

      return next.handle(request).pipe(
        finalize(() => {
            setTimeout(() => {
          this.req--;
          if (this.req === 0) {
            this.loadingScreenService.stopLoading();
          }
        }, 1000);
    })
      );

  }
}

