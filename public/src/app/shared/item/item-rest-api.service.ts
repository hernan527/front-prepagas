import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './item'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemRestApiService {
  apiURL = 'https://api.mercadolibre.com/sites/MLA';
  apiUrl = 'http://localhost:5200';


  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  queryItems(query: string, offset:number = 0, limit:number = 20): Observable<any> {
    return this.http
      .get<any>(`${this.apiURL}/search?q=${query}&offset=${offset}&limit=${limit}`);
  }

  getItems(ids:string[]): Observable<any> {
    let aux = '';
    ids.forEach((id) => {
      aux = aux.concat(`${id},`);
    });

    let aux2 = `https://api.mercadolibre.com/items?ids=${aux.length > 0 ? aux.substring(0, aux.length - 1) : '' }`;
    return this.http
      .get<Item>(aux2);
  } 

  searchClinicas(textSearch: string): Observable<any[]> {
    const queryParams = { textSearch }; // Parámetros de consulta
    return this.http.get<any[]>(`${this.apiUrl}/clinicas/search`, { params: queryParams });
  }
  
}