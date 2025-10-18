import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.token;
    if(token != null) {
      const anyRequest = req.clone({
        headers: req.headers.set('Authorization',`Bearer ${token}`)
      });
      return next.handle(anyRequest);
    }
    return next.handle(req);
  }

}