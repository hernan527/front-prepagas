import {  EventEmitter, Injectable,Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServcioRetornoPrecioService {
  @Output() disparadorDePrecio: EventEmitter <any> = new EventEmitter;
  public formularioData: any;
  
  constructor() { }

  emitirDatos(data: any) {
    // Agrega un registro de consola aquí
    // console.log('Enviando datos desde el servicio:', data);

    this.disparadorDePrecio.emit(data);
  }
  setFormularioData(data: any) {
    // Guarda los datos del formulario en la propiedad formularioData
    this.formularioData = data;
    // console.log('setFormularioData desde el servicio:', data);

  }

  getFormularioData() {
    // Devuelve los datos del formulario almacenados en la propiedad formularioData
    // console.log('getFormularioData desde el servicio:',this.formularioData);
    return this.formularioData;
  }

}
