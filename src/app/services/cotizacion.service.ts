import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../constants';
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



  constructor(private http: HttpClient) { }

  getPrecios(formCotizar: any) {
    const url = `${this.url}/cotizacion`;
    console.log('en el servicio', url);
    console.log('en el servicio', formCotizar);

    // formCotizar.coeficientes = this.coeficientes;
    return this.http.post(url, formCotizar); // Devuelve el observable directamente
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