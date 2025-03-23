import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable, throwError,  } from "rxjs";
import { catchError, retry, finalize } from 'rxjs/operators';
import { NotifierService } from './notifier.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(public loaderService: LoaderService, private notifierService: NotifierService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(
      retry(2), // Retry on failure
      catchError((error) => {
        let message = '';
        if (error.error instanceof ErrorEvent) {
            // handle client-side error
            message = `Error: ${error.error.message}`;
        } else {
            // handle server-side error
            message = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        this.notifierService.showNotification('An error has occurred. Try again!','Dismiss');
        return throwError(() => new Error(message));
      }),
      finalize(()=> {
        this.loaderService.isLoading.next(false);
        console.log(`${req.method} "${req.urlWithParams}"`);
      })
    )
  }
}