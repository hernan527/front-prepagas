import { Injectable, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class CoeficientesService {
  private apiUrl = SERVER_URL + '/empresas'; // Reemplaza con la URL de tu API
  coeficientes: { [nombreEmpresa: string]: number } = {};
  constructor(private http: HttpClient) {
    this.inicializarCoeficientes();
  }

  async obtenerDatos(): Promise<void> {
    try {
      const response: any = await this.http.get(this.apiUrl).toPromise();
  
      response.forEach((empresa: any) => {
        const nombreEmpresa = empresa.name;
        console.log(nombreEmpresa)

        this.coeficientes[nombreEmpresa] = empresa.factores.coeficiente;
        console.log(this.coeficientes[nombreEmpresa])

      });
    } catch (error) {
      console.error('Error al obtener los coeficientes:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  }
  
  
  

  private async inicializarCoeficientes(): Promise<void> {
    await this.obtenerDatos();
  }
}
