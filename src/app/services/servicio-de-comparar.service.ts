import { EventEmitter, Injectable,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeCompararService {
  compareList: any[] = [];
  selectedClinica: any[] = [];
  @Output() servicioComparar: EventEmitter <any> = new EventEmitter;
  constructor() { }
}
