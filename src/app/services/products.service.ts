import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './../directives/products-sortable.directive';
import { FormGroup } from '@angular/forms';
import { SERVER_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import * as clinicas from './../data/constants/mock/clinicas.json';
import * as planes from './../../../public/products.json';
import { ItemsService } from './items.service';
import { FormData } from './../data/interfaces/interfaces';
import { Planes } from './../data/interfaces/planes';
import {CotizacionService} from './cotizacion.service';

interface SearchResult {
  planes: any[]; // Ajusta el tipo de datos según tus necesidades
  total: number; // El número total de resultados
}

// interface SearchResult {
//   planes: Planes[];
//   allplanes: Planes[];
//   total: number;
// }
// interface State1 {
// loadedItems: number;
//   loading: boolean;
// }
// interface State2 {
//   page: number;

//   }
// interface State {
//   page: number;
//   pageSize: number;
//   searchTerm: string;
//   ProductFilter: string;
//   productStatus: string;
//   productPrice: number;
//   productRate: number;
//   sortColumn: SortColumn;
//   sortDirection: SortDirection;
//   startIndex: number;
//   endIndex: number;
//   totalRecords: number;
// }
// const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
// function sort(planes: Planes[], column: SortColumn, direction: string): Planes[] {
//   if (direction === '' || column === '') {
//     return planes;
//   } else {
//     return [...planes].sort((a, b) => {
//       const res = compare(a[column], b[column]);
//       return direction === 'asc' ? res : -res;
//     });
//   }
// }

// function matches(planes: Planes, term: string, pipe: PipeTransform) {
//   return planes.images.includes(term.toLowerCase())
//     || planes.name.toLowerCase().includes(term.toLowerCase())
//     || planes.type.toLowerCase().includes(term.toLowerCase())
// }

@Injectable({ providedIn: 'root' })

  export class ProductsService {
    private productosFiltradosSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public productosFiltrados$: Observable<any[]> = this.productosFiltradosSubject.asObservable();
    private products: any[] = []; // Copia de los productos originales
    private filteredProductsSubject = new BehaviorSubject<any[]>([]);
    public filteredProducts$: Observable<any[]> = this.filteredProductsSubject.asObservable();
    private filtrosSeleccionadosGroup: FormGroup;
    private productosSubject = new BehaviorSubject<any[]>([]);
    private filterFormSubject: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);

    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _planes$ = new BehaviorSubject<Planes[]>([]);
    private _allPLanes$ = new BehaviorSubject<Planes[]>([]);
    private _total$ = new BehaviorSubject<number>(0);
    private _datas$ = new Subject<void>();
    private datos: FormData[]; // Variable privada para almacenar los datos  // private _state: State = {
    private eventoFiltering = new Subject<void>();
    private eventoFilterClinicas = new Subject<void>();
  //   page: 1,
  //   pageSize: 10,
  //   searchTerm: '',
  //   ProductFilter: '',
  //   productStatus: '',
  //   productRate: 0,
  //   productPrice: 0,
  //   sortColumn: '',
  //   sortDirection: '',
  //   startIndex: 0,
  //   endIndex: 9,
  //   totalRecords: 0
  // };
  public clinicas: any = (clinicas as any).default;
  public secureProducts: any = (planes as any).default; 

    serverUrl = SERVER_URL;
    user = [];
    Products$: any;
    productRating: any;
    private productsSubject = new BehaviorSubject<any[]>([]);
    products$ = this.productsSubject.asObservable();
    eventoFiltering$ = this.eventoFiltering.asObservable();
    eventoFilterClinicas$ = this.eventoFilterClinicas.asObservable();
    private myForm: FormGroup;
    constructor(
    private http: HttpClient,
    public itemsService: ItemsService,
    private cotizacionService: CotizacionService

    ) {
     
    // this._search$.pipe(
    //   tap(() => this._loading$.next(true)),
    //   debounceTime(200),
    //   switchMap(() => this._search()),
    //   delay(200),
    //   tap(() => this._loading$.next(false))
    // ).subscribe(result => {
    //   this._planes$.next(result.planes);
    //   this._total$.next(result.total);
    // });
    this._search$.next();
    // Api Data
   
            this.products =this.cotizacionService.planes
            this.secureProducts =this.cotizacionService.planes
            // console.log(this.products )
       
    }
  setForm(form: FormGroup) {
    this.myForm = form;
  }

  getForm() {
    return this.myForm;
  }

    // Método para establecer los productos originales
    setOriginalProducts(products: any[]): void {
      this.products = [...products];
    }

  // get planes$() { return this._planes$.asObservable(); }
  // // get allplanes$() { return this._allplanes$.asObservable(); }
  // get product() { return this.products; }
  // get total$() { return this._total$.asObservable(); }
  // get datas$() { return this._datas$.asObservable(); }
  // get loading$() { return this._loading$.asObservable(); }
  // get page() { return this._state.page; }
  // get pageSize() { return this._state.pageSize; }
  // get searchTerm() { return this._state.searchTerm; }
  // get ProductFilter() { return this._state.ProductFilter; }
  // get productPrice() { return this._state.productPrice; }
  // get productRate() { return this._state.productRate; }
  // get startIndex() { return this._state.startIndex; }
  // get endIndex() { return this._state.endIndex; }
  // get totalRecords() { return this._state.totalRecords; }

  // set page(page: number) { this._set({ page }); }
  // set pageSize(pageSize: number) { this._set({ pageSize }); }
  // set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  // set ProductFilter(ProductFilter: string) { this._set({ ProductFilter }); }
  // set productPrice(productPrice: number) { this._set({ productPrice }); }
  // set productRate(productRate: number) { this._set({ productRate }); }
  // set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  // set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }
  // set startIndex(startIndex: number) { this._set({ startIndex }); }
  // set endIndex(endIndex: number) { this._set({ endIndex }); }
  // set totalRecords(totalRecords: number) { this._set({ totalRecords }); }

  // private _set(patch: Partial<State>) {
  //   Object.assign(this._state, patch);
  //   this._search$.next();
  // }
 // Método para establecer el formulario

 public setFilteredProducts(filteredProducts: any[]): void {
  this.filteredProductsSubject.next(filteredProducts);
}

 setFilterForm(form: FormGroup) {
    this.filtrosSeleccionadosGroup = form;
    this.filterFormSubject.next(form); // Emitir el formulario a través del BehaviorSubject
  }

  // Obtener un observable que emite el formulario cuando cambia
  getFilterFormObservable(): Observable<FormGroup> {
    return this.filterFormSubject.asObservable();
  }

  actualizarProductos(productos: any[]): void {
    this.productosSubject.next(productos);
  }

  // Método para suscribirse a la variable de productos
  obtenerProductos(): BehaviorSubject<any[]> {
    return this.productosSubject;
  }
  addClinicas(){
    //  console.log(this.products)
    //  console.log(this.clinicas)
    
     let products = this.products;
    
     for ( let i = 0; i<products.length;i++){
      // console.log(this.products[i].id)
      let clinicPlan = []
    
      for ( let x in this.clinicas ){
        var incluyeid = this.clinicas[x].cartillas.includes(this.products[i].item_id);
    
        if ( incluyeid == true ){
          clinicPlan.push(this.clinicas[x])
        } 
        this.products[i].clinicas = clinicPlan;
      }
    } 
    
    this.itemsService.setItems(this.products);
    
    
    }    
    getProducts(): Observable<any> {
      return new Observable((observer) => {
            this.http.get<any>(this.serverUrl + '/planes').subscribe({
              next: (planesData) => {
                this.products = planesData;
                this.secureProducts = planesData;
                // console.log(this.products);
                observer.next(this.products); // Emitir los productos una vez que se obtengan
                observer.complete();
              },
              error: (error) => {
                // console.log(error);
                observer.error(error); // Propagar el error si la solicitud no se realiza correctamente
              }    
        });
      });}

      filterProducts(form: FormGroup, listadoPlanes: any[]): void {
        this.products=listadoPlanes // Copia de los productos originales
        const filteredProducts = this.filterLogic(form); // Realiza el filtrado de productos
        this.filteredProductsSubject.next(filteredProducts);
        // console.log('filteredProducts ',filteredProducts)
      } 
      
      private filterLogic(form: FormGroup): any[] {        // Obtiene los valores de los filtros del formulario
        const selectedRating = form.get('selectedRating')?.value;
        const priceRange = form.get('priceRange')?.value;
        const valueSlide3 = form.get('valueSlide3')?.value;
        const valueSlide4 = form.get('valueSlide4')?.value;
        const PMO_Solo_por_Aportes = form.get('PMO_Solo_por_Aportes')?.value;
        const Cirugia_Estetica = form.get('Cirugia_Estetica')?.value;
        const Ortodoncia_Adultos = form.get('Ortodoncia_Adultos')?.value;
        const Habitacion_Individual = form.get('Habitacion_Individual')?.value;
        const Cobertura_Nacional = form.get('Cobertura_Nacional')?.value;
        const Sin_Copagos = form.get('Sin_Copagos')?.value;
    
        // Realiza el filtrado de productos
        const filteredProducts = this.products.filter(product => {          // Aplica las condiciones de filtrado
          return (
            // Verifica cada condición de filtro aquí
            (selectedRating.length === 0 ||  product.rating >= selectedRating) &&
            (priceRange.length === 0 || (product.precio >= priceRange[0] && product.precio <= priceRange[1])) &&
            (valueSlide3 === null || product.valueSlide3 >= valueSlide3) &&
            (valueSlide4 === null || product.valueSlide4 >= valueSlide4) &&
            (PMO_Solo_por_Aportes === false || product.PMO_Solo_por_Aportes === true) &&
            (Cirugia_Estetica === false || product.Cirugia_Estetica === true) &&
            (Ortodoncia_Adultos === false || product.Ortodoncia_Adultos === true) &&
            (Habitacion_Individual === false || product.Habitacion_Individual === true) &&
            (Cobertura_Nacional === false || product.Cobertura_Nacional === true) &&
            (Sin_Copagos === false || product.Sin_Copagos === true)
          );
        });
    // console.log(filteredProducts)
        return filteredProducts;
      }
   
      activarFuncionEnComponenteB() {
        // console.log('product-service 287');

        this.eventoFiltering.next();
      }
      applyFiltersDespuesDeOnItemSelect() {
        // console.log('product-service 289');
        this.eventoFilterClinicas.next();
      }

      setProductosFiltrados(productos: any[]): void {
        console.log('product-service 296',productos);

        this.productosFiltradosSubject.next(productos);
      }
  // private _search(): Observable<SearchResult> {

//     const datas = (this.product) ?? [];
//     const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

//     // 1. sort
//     let countries = sort(datas, sortColumn, sortDirection);

//     // 2. search
//     if (searchTerm) {
//       countries = countries.filter(country => matches(country, searchTerm, this.pipe));
//     }

//     // 3. filter
    // if (this.ProductFilter) {
    //   countries = countries.filter(country => matches(country, this.ProductFilter, this.pipe));
    // }

//     // 4. paginate
//     this.totalRecords = countries.length;
//     this._state.startIndex = (page - 1) * this.pageSize + 1;
//     this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
//     if (this.endIndex > this.totalRecords) {
//       this.endIndex = this.totalRecords;
//     }
//     // 5. Rate Filter       
//     if (this.productRating) {
//       countries = countries.filter(country => country.rating >= this.productRating);
//     }
//     else {
//       countries = countries;
//     }

//     // 6.Price &  rate Filter
//     if (this.productPrice) {
//       countries = countries.filter(country => country.price >= Object.values(this.productPrice)[0] && country.price <= Object.values(this.productPrice)[1]);
//     }
//     else {
//       countries = countries;
//     }

//     // 6 Status Filter
//     // if (this.productStatus) {
//     //   countries = countries.filter(country => country.status == this.productStatus);
//     // // }
//     // else {
//     //   countries = countries;
//     // }

//     const total = countries.length;

//     const allpLanes = countries;
//     countries = countries.slice(this._state.startIndex - 1, this._state.endIndex);
//     // return of({ planes, total, allplanes });

  // }

  
}
