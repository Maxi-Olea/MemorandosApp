import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private dataService: DataService) {}

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {

    const tokenreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.dataService.getToken()}`
      }
    })
    return next.handle(tokenreq);
  }
}
