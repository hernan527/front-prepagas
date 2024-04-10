import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  

  constructor() { }

  private loading$: typeof Subjet = new BehaviorSubject(false);
  private message$: typeof Subjet = new BehaviorSubject(null);
  private progressValue$: typeof Subjet = new BehaviorSubject(null);

  show(message: string = null, progressValue: number = null ) {
    this.loading$.next(true);
    this.message$.next(message);
    this.progressValue$.next(progressValue)
  }
hide (){
  this.loading$.next(false);
    this.message$.next(null);
    this.progressValue$.next(null)
  }
   get state(){
    return this.loading$.asObservable();
   }
   get message() {
    return this.message$.asObservable();
   }
   setMessage(value: string) {
    this.message$.next(value);
   }
   get progressValue(){
    return this.progressValue$.asObservable();
   }
setProgressValue(value: number) {
  this.progressValue$.next(value);
}

}
