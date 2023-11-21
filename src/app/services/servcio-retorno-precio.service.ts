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
    console.log('Enviando datos desde el servicio:', data);

    this.disparadorDePrecio.emit(data);
  }
  setFormularioData(data: any) {
    // Guarda los datos del formulario en la propiedad formularioData
    this.formularioData = data;
    console.log('setFormularioData desde el servicio:', data);
  
    // Almacena 'data' en el almacenamiento local
    localStorage.setItem('formularioData', JSON.stringify(data));
    console.log('formularioData guardado en el almacenamiento local', data);
  
    // Si necesitas trabajar con la caché, deberías considerar Service Workers
    // Pero ten en cuenta que esto generalmente se usa en un contexto de PWA.
  }
  

  getFormularioData() {
    // Devuelve los datos del formulario almacenados en la propiedad formularioData
    console.log('getFormularioData desde el servicio:', this.formularioData);
  
    const storedData = localStorage.getItem('formularioData');
  
    return {
      formdata: this.formularioData,
      storedData: storedData ? JSON.parse(storedData) : null
    };
  }
  
}
