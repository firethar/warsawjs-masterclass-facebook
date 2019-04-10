import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { CacheManagerService } from '../service/cache-manager.service';
import { tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cache: CacheManagerService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url;

    if (this.cache.has(url)) {
      console.log('CACHE', url);

      return of(this.cache.get(url));
    }

    return next.handle(req)
      .pipe(
        filter( evt => evt instanceof HttpResponse),
        tap((response: HttpResponse<any>) => {
          console.log('REAL', url);
          console.log(response);
          this.cache.save(url, response);
        })
      );
  }
}
