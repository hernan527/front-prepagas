// dialog.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private _visible = new BehaviorSubject<boolean>(false);
  visible$ = this._visible.asObservable();
  private _page = new BehaviorSubject<string>('');
  page$ = this._page.asObservable();

  toggleVisibility(page: string) {
    console.log("en el servicio antes : ", this._visible.value);
    this._page.next(page);
    this._visible.next(!this._visible.value);
    console.log("en el servicio después : ", this._visible.value);
  }
}
