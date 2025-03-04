import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../constants';
import { tap, catchError } from 'rxjs/operators';  // Add this import


@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  private url = SERVER_URL;
  public planes: any;
  private coeficientes: any;
  public precios: any;
  public clinicas: any;
  public empresas: any;



  constructor(private http: HttpClient) {
    this.planes = this.getPlanes();
   }
   getPrecios(formCotizar: any) {
    const url = `${this.url}/cotizacion`;
    // console.log('En el servicio', url);
    // console.log('Form Cotizar:', formCotizar);
  
    // Send POST request and handle response
    this.precios = this.http.post<any>(url, formCotizar).pipe(
      tap(response => {
        // console.log('Respuesta recibida:');
        // console.log(response);

      }),
      catchError(error => {
        console.error('Error al obtener precios:', error);
        throw error; // Rethrow the error so the caller can handle it
      })
    );

    // Return the observable so the caller can subscribe to it
    return this.precios; // Return the observable directly
  }
  
  
 

  getPlanes(){
    const url = `${this.url}/planes`;
    this.planes = this.http.get(url);

    return this.planes;
  }

  
  getClinicas(){
    const url = `${this.url}/clinicas`;
    this.clinicas = this.http.get(url);
    return this.clinicas;
  }

  getEmpresas(){
    const url = `${this.url}/empresas`;
    this.empresas = this.http.get(url);
    return this.empresas;
  }
  

}