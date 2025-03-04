// dialog-event.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogEventService {
  private updateListSubject = new Subject<void>();

  updateList$ = this.updateListSubject.asObservable();

  triggerUpdateList() {
    this.updateListSubject.next();
  }
}
