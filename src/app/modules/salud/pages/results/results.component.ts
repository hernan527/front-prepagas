import {
  Component,
  HostListener,
  Renderer2,
  ChangeDetectorRef,
  OnInit,
  HostBinding,
  ViewChild,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  NgZone,
  Inject,
  AfterViewInit,
  AfterContentChecked,
  SimpleChanges,
  OnChanges,
  computed,
  OnDestroy,
  CUSTOM_ELEMENTS_SCHEMA, 
  NO_ERRORS_SCHEMA,
  Signal, signal
} from "@angular/core";
import { Observable } from "rxjs";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NxActionComponent, NxActionIconDirective } from '@aposin/ng-aquila/action';
import { NxIconComponent } from '@aposin/ng-aquila/icon';
import * as planes from "../../../../../../public/products.json";
import { ModalService } from "../../../../_modal";
import { ServcioRetornoPrecioService } from "../../../../services/servcio-retorno-precio.service";
import { ServicioDeCompararService } from "../../../../services/servicio-de-comparar.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import * as clinicas from "../../../../data/constants/mock/clinicas.json";
import { HttpClient } from "@angular/common/http";
import { SERVER_URL } from "../../../../constants";
import { ItemsService } from '../../../../shared/item/items.service';
import { SelectItem } from "primeng/api"; // Import SelectItem from PrimeNG
import { Empresa } from "../../../../data/interfaces/empresas";
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from "@angular/common";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { MegaMenuItem, MenuItem } from "primeng/api";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductsService } from "./../../../../services/products.service";
import { CotizacionService } from "../../../../services/cotizacion.service";
import { LocalStorageService } from "../../../../services/local-storage.service";
import { GetQuoteComponent } from "../../components/atoms/get-quote/get-quote.component";
import rfdc from "rfdc";
import { Credit } from "./../../../../data/interfaces";
import { CREDIT_DATA_ITEMS } from "./../../../../data/constants/mock";
import { Planes } from "./../../../../data/interfaces/planes";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { SortPipe } from "../../../../../pipes/sort.pipe";
import { FilterPipe } from "../../../../../pipes/filter.pipe";
import { SkeletonModule } from "primeng/skeleton";
import { ProductLandComponent } from "../../components/molecules/product-land/product-land.component";
import { ProductCardComponent } from "../../components/molecules/product-card/product-card.component";

import { NgIf, NgFor, AsyncPipe } from "@angular/common";
import { FiltersProductsComponent } from "../../components/molecules/filters-products/filters-products.component";
import { RippleModule } from "primeng/ripple";
import { ButtonModule } from "primeng/button";
import { ListViewComponent } from "../../components/organisms/list-view/list-view.component";
import { SearchFormComponent } from "../../components/atoms/search-form/search-form.component";
import { BannerListComponent } from "../../components/organisms/banner-list/banner-list.component";
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NxSidebarModule } from '@aposin/ng-aquila/sidebar'; 
import { MatDialogModule } from '@angular/material/dialog';
import { ComparaItemComponent } from './../../components/templates/compara-item/compara-item.component';
import { DialogModule } from 'primeng/dialog';
import { ComparaAttributesComponent } from "./../../components/templates/compara-item/compara-attributes/compara-attributes.component";
import { CarritoComparaComponent } from "./../../components/molecules/carrito-compara/carrito-compara.component";
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ResponsiveService } from "../../../../services/responsive.service";
import { FormularioComponent } from "./../../components/atoms/formulario/formulario.component";
import { DialogService } from "src/app/services/dialog.service";
import { register } from 'swiper/element/bundle';
// import { CardLandComponent } from '../../components/molecules/card-land/card-land.component';
// import { CardGridComponent } from '../../components/molecules/card-grid/card-grid.component';
import {
  NxColComponent,
  NxLayoutComponent,
  NxRowComponent,
} from '@aposin/ng-aquila/grid';
register();

declare var addProp: any;
declare var desectItem: any;
declare var showandHide: any;
interface Country {
  name: string;
}
interface ResponseData {
  planes: any[]; // Aquí debes definir el tipo correcto de los datos de planes
}

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
    selector: "app-results",
    templateUrl: "./results.component.html",
    styleUrls: ["./results.component.scss"],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.Default,
    imports: [
    BannerListComponent,
    SearchFormComponent,
    ButtonModule,
    RippleModule,
    FiltersProductsComponent,
    NgIf,
    NgFor,
    ProductLandComponent,
    SkeletonModule,
    AsyncPipe,
    FilterPipe,
    SortPipe,
    ProductCardComponent,
    MatPaginatorModule,
    // JsonPipe,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    NxSidebarModule,
    MatDialogModule,
    // ComparaItemComponent,
    DialogModule,
    // ComparaAttributesComponent,
    CarritoComparaComponent,
    MatBadgeModule,
    MultiSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    CommonModule,
    AutoCompleteModule,
    FormularioComponent,
    // CardLandComponent,
    // CardGridComponent,
    NxColComponent,
    NxLayoutComponent,
    NxRowComponent,
    NxActionComponent,
    RouterLink,
    RouterLinkActive,
    NxIconComponent,
    NxActionIconDirective,
]
})
export class ResultsComponent implements OnInit, OnChanges, OnDestroy  {
  @ViewChild(ListViewComponent) list: any;
  
  view: string = "list";
 
  clinicasSignal: Signal<any[]> = signal([]); // Inicializamos la signal
  planesSignal: Signal<any[]> = signal([]);
  empresasSignal: Signal<any[]> = signal([]);


  receiveMessage($event: string) {
    this.view = $event;
  }
  @ViewChild("scroller") scroller!: CdkVirtualScrollViewport;
  itemsPerPage = 9; // Número de elementos por página
  currentPage = 1; // Página actual, inicializada en 1
  totalItems: number;
  itemsPerPageOptions: number[] = [10, 20, 30, 50, 100]; // Opciones para productos por página
  
  public productList: any;
  public filterCategory: any;
  [x: string]: any;
  loading$: Observable<boolean>;
  public show: boolean = false;
  public buttonName: any = "Show";
  serverUrl = SERVER_URL;
  bodyText: string;
  title = "product-app";
  public secureProducts: any = (planes as any).default;

  public products: any = (planes as any).default;
  public qPlanes: number = this.products.length;
  public productosFiltrados= this.productos;

  hidden = false;
  compareList: [];
  compareLength: any;
  public clinicas: any = (clinicas as any).default;
  offset: number = 0;
  query: string = "";
  limit: number = 10;
  multiDefaultOption: any[] = []; // Declaración de multiDefaultOption como un arreglo vacío
  countries!: Country[];
  selectedCountries!: Country[];
  display: boolean = false;
  layout: string = "list";

  SortbyParam: string = "empresa"; // Valor por defecto
  selectedRating: FormControl = new FormControl("");
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  planes: any = [];
  sidebarVisible: boolean = false;
  skeletonData: any[] = Array(9).fill({}); // Genera 9 elementos ficticios para 3 filas de 3 tarjetas cada una
  validacionclinica = "show";
  SearchClinica = "";
  empresa: FormControl = new FormControl("");
  SearchEmpresa = "";
  displayDialog: boolean = false;
  SortDirection = "asc";
  showFiller = false;
  empresas: any;

  minRating: number = 1; // Valor inicial de calificación mínima
  ShowFilter = false;
  limitSelection = false;
  formFilter: FormGroup;
  planesSeleccionados='Hola sidebar';
  dropdownSettings: {};
  dropdownClinica: SelectItem[] = [];
  selectedClinica: any[] = [];
  selectedClinicaControl = new FormControl([]);
  rowsPerPageOptions = [5, 10, 20];
  tieredItems: MenuItem[] = [];

  formDataInicial: FormGroup; // Formulario inicial con valores predeterminados
  formDataInicialJSON: any[];
  anchoSidebar = "50%"; // Ancho por defecto del sidebar
  isSmallScreen: boolean = false; // Default value
  isMediumScreen: boolean = false;
  isLarge: boolean = false;
  isSmall: boolean = false; // Default value
  isMedium: boolean = false;
  isLargeScreen: boolean = false;
  clinicasPorRegiones: any[];
  // data constants
  public credits: Credit[] = CREDIT_DATA_ITEMS;
  listaComparar = this.compareProdList()
  pagination = 'show';
  cadena: any
  selectedItems: any[] | undefined;
  visible = false;
  productChosen: any;
  showProductDetail = false;

  items: any[] | undefined;
 
previousSelectedItems: any[] = [];

  



  definirLength(){
if(this.productosFiltrados){
this.cadena = this.productosFiltrados.length
} else {
  this.cadena = this.products.length
}
return this.cadena
  }
  // trackBy functions
  trackByCredits = (_: number, item: Credit): number => item.id;

  constructor(
    private modalService: ModalService,
    private dataFormularios: ServcioRetornoPrecioService,
    private deselctComparar: ServcioRetornoPrecioService,
    private servicioComparar: ServicioDeCompararService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public itemsService: ItemsService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    private productoService: ProductsService,
    private cotizacionService: CotizacionService,
    private localStorageService: LocalStorageService,
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver,
    private responsiveService: ResponsiveService,
    private dialogService: DialogService,
    
  ) 
  {
    this.formDataInicial = this.crearFormularioInicial();
    this.buildForm();
    this.loadData();
  }
  loadData(): void {
    // Llamadas a los servicios para obtener datos y actualizar las señales
    this.cotizacionService.getClinicas().subscribe({
      next: (clinicas: any) => {
        // Actualizamos el valor de la señal directamente
        this.clinicasSignal = signal(clinicas || []);
      },
      error: (error: any) => {
        console.error('Error fetching clinicas', error);
        // En caso de error, asignamos un array vacío
        this.clinicasSignal = signal([]);
      },
    });

    this.cotizacionService.getPlanes().subscribe({
      next: (planes: any) => {
        // Actualizamos el valor de la señal directamente
        this.planesSignal = signal(planes || []);
      },
      error: (error: any) => {
        console.error('Error fetching planes', error);
        // En caso de error, asignamos un array vacío
        this.planesSignal = signal([]);
      },
    });

    this.cotizacionService.getEmpresas().subscribe({
      next: (empresas: any) => {
        // Actualizamos el valor de la señal directamente
        this.empresasSignal = signal(empresas || []);
      },
      error: (error: any) => {
        console.error('Error fetching empresas', error);
        // En caso de error, asignamos un array vacío
        this.empresasSignal = signal([]);
      },
    });
  }
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
 } 

   themeSelectorMode = computed(() => {
    if(this.responsiveService.isLarge) {
      // console.log(' 271 themeSelectorMode isLarge ',this.responsiveService.isLarge)
      return true;
    }
    // console.log(' 274  themeSelectorMode isLarge ',this.responsiveService.isLarge)

    return false;;
  }) 

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail
    if(!this.showProductDetail){
      this.productChosen = {}
    }
  }

  onShowDetail(id: string) {
    console.log('this.productChosen en results fila 301  :',this.productChosen)

    console.log('product en results fila 300  :', id)
    this.statusDetail = 'loading';
    this.toggleProductDetail();
  

      const producto = this.productosFiltrados.find((prod: { item_id: string; }) => prod.item_id === id);

  
     
      if (producto) {
        this.productChosen = producto; // Asignar el producto seleccionado a 'productChosen'
      } else {
        console.log('Producto no encontrado');
      }
  }
// Función que actualiza isSmallScreen según el estado de la pantalla
componentSelectorMode(breakpoints: { [key: string]: boolean }) {
  // Asignamos los valores de los breakpoints a variables locales
  const smallScreen = breakpoints['(max-width: 480px)'] ?? false;
  const mediumScreen = breakpoints['(min-width: 481px) and (max-width: 992px)'] ?? false;
  const largeScreen = breakpoints['(min-width: 993px)'] ?? false;

  // También podrías hacer algo cuando se actualice, por ejemplo:
  if (smallScreen) {
    // console.log(' 289  La pantalla es Small.', smallScreen);
    this.isSmallScreen = true;
    this.itemsPerPage = 10000;
    this.sidebarVisible = false;
  } else if (mediumScreen) {
    // console.log(' 292 La pantalla es Medium.', mediumScreen);
    this.isSmallScreen = true;
    this.sidebarVisible = false;
  } else if (largeScreen) {
    // console.log(' 295  La pantalla es Large.', largeScreen);
    this.isSmallScreen = false;
    this.sidebarVisible = true;
  }
}

  

     // Ejemplo de cómo acceder al formulario desde otro componente
  
     SortbyParamControl = new FormControl(this.SortbyParam);
     public productosActualizados:Array<any> = []
     private buildForm(){
 
       this.formFilter =this.formBuilder.group({
         buscaClinica: [''],
         empresa_prepaga: ['0'],
         selectedRating:0,
       });
     }
    
 
  private crearFormularioInicial(): FormGroup {
    return this.formBuilder.group({
      grupo: 2,
      empresa_prepaga: 0,
      edad_1: 19,
      edad_2: 0,
      numkids: 0,
      tipo: "P",
      agree: true,
      aporteOS: "",
      sueldo: 0,
      aporte: 0,
      monoadic: false,
      cantAport: 0,
      afinidad: false,
      bonAfinidad: 0,
      supras: false,
      segvida: false,
      segvida1: false,
      personalData: this.formBuilder.group({
        name: "",
        email: "",
        phone: "",
        region: "AMBA",
      }),
    });
  }


  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
 console.log('toggleSidebar() :',this.sidebarVisible )
} 
onSidebarStateChanged(state: boolean) {
  this.sidebarVisible = state;
  // Aquí puedes realizar otras acciones con el valor de sidebarVisible si es necesario
} 
  toggleCompare(product: any) {
    product.compare = !product.compare;
 
}
actualizarLista() {
  const resultado = this.compareProdList();
  this.compararService.updateList(resultado);
}
  compareProdList() {
    // console.log(" results 364 this.products:");
    // console.log(this.products);

    if (this.products.resultado) {
      this.products = this.products.resultado;
      // console.log("results 369  this.products.resultado:", this.products);
    }

    // console.log("results 372 this.servicioComparar.compareList");
    // console.log( this.servicioComparar.compareList);
    this.compareLength = this.products.filter(
      (p: { compare: any }) => p.compare
    ).length;
    this.compareList = this.products.filter((p: { compare: any }) => p.compare);
    // console.log("results 378 this.compareList");
    // console.log(this.compareList);

    var planesSel = this.products.filter((p) => p.compare);
    // console.log("results 382 this.servicioComparar.compareList");

    this.servicioComparar.compareList = this.products.filter(
      (p: { compare: any }) => p.compare
    );
  // console.log('results 387 this.servicioComparar.compareList')

    // console.log(this.servicioComparar.compareList)
    // console.log('results 390 this.compareProdClinicas(this.servicioComparar.compareList)')

    // console.log(this.compareProdClinicas(this.servicioComparar.compareList))
    
    return this.servicioComparar.compareList;
  }


  compareCliListVal() {
    var clinicasGrilla = this.compareProdClinicas(this.compareProdList());
    // console.log(clinicasGrilla)
    return clinicasGrilla;
  }

  listadoColumna1(compareProdList: string | any[]) {
    let listaCompleta = [];

    for (let i = 0; i < compareProdList.length; i++) {
      let clinicas = compareProdList[i].clinicas;
      clinicas.forEach((element: any) => {
        if (listaCompleta.indexOf(element, 0) == -1) {
          listaCompleta.push(element);
        }
      });
    }
  }

  compareProdClinicas(products: any[]) {
    var clinicas = [];
    let itemSelected = products;
    // console.log(products)
    // console.log(clinicas)

    itemSelected.forEach((product: { clinicas: any[] }) => {
      product.clinicas.forEach((clinic) => {
        const id = clinic.item_id;

        const validacion = clinicas
          .map((producto) => producto.item_id)
          .indexOf(id);
        if (validacion === -1) {
          clinicas.push(clinic);
        }
      });
    });
    var data = [];
    // console.log(clinicas)
    for (let x in clinicas) {
      clinicas[x].valida = [];
      clinicas[x].planesSeleccionados = [];
      clinicas[x].cliPased = [];
      // console.log(clinicas)

      for (let i = 0; i < products.length; i++) {
        var obj = {};
        clinicas[x].planesSeleccionados.push(products[i].name);
        // console.log(products[i].name)
      }
      obj["nombre"] = clinicas[x].entity;
      obj["barrio"] = clinicas[x].ubicacion.barrio;
      for (let i = 0; i < products.length; i++) {
        let id = products[i].item_id;
        if (clinicas[x].cartillas.includes(id) == true) {
          // console.log(clinicas[x].cliPased)

          obj[products[i].item_id] = "ok";
          clinicas[x].cliPased.push(obj);

          clinicas[x].valida.push("ok");
        } else {
          clinicas[x].valida.push("no");
          obj[products[i].item_id] = "no";
        }
      }
      clinicas[x].cliPased = obj;

      data.push(obj);
      // console.log(data)
    }
    var planesElegidos = [];
    for (let n in clinicas) {
      clinicas[n].valida.unshift(clinicas[n]["entity"]);
      clinicas[n].planesSeleccionados.unshift("Nombre de Entidad");
      planesElegidos = clinicas[n].planesSeleccionados;
    }
    const clCaba = clinicas.filter(function (clinica) {
      return clinica.ubicacion.region === "CABA";
    });
    const clNorte = clinicas.filter(function (clinica) {
      return clinica.ubicacion.region === "GBA-Norte";
    });
    const clOeste = clinicas.filter(function (clinica) {
      return clinica.ubicacion.region === "GBA-Oeste";
    });
    const clSur = clinicas.filter(function (clinica) {
      return clinica.ubicacion.region === "GBA-Sur";
    });
    const clLaPlata = clinicas.filter(function (clinica) {
      return clinica.ubicacion.region === "La Plata";
    });
    // let clinicasHeader = clinicas[0]['planesSeleccionados'];
    let clinicasCaba = clCaba.map((planes) => planes.valida);
    let clinicasMorte = clNorte.map((planes) => planes.valida);
    let clinicasOeste = clOeste.map((planes) => planes.valida);
    let clinicasSur = clSur.map((planes) => planes.valida);
    let clinicasLaPlata = clLaPlata.map((planes) => planes.valida);

    let clinicasCabaPased = clCaba.map((planes) => planes.cliPased);
    let clinicasNortePased = clNorte.map((planes) => planes.cliPased);
    let clinicasOestePased = clOeste.map((planes) => planes.cliPased);
    let clinicasSurPased = clSur.map((planes) => planes.cliPased);
    let clinicasLaPlataPased = clLaPlata.map((planes) => planes.cliPased);

    // console.log(clinicasCabaPased);
    // console.log(clinicasNortePased);
    // console.log(clinicasOestePased);
    // console.log(clinicasSurPased);
    // console.log(clinicasLaPlataPased);

    // console.log(clinicasCaba);
    return [
      clinicasCabaPased,
      clinicasNortePased,
      clinicasOestePased,
      clinicasSurPased,
      clinicasLaPlataPased,
      planesElegidos,
      clinicasCaba,
      clinicasMorte,
      clinicasOeste,
      clinicasSur,
      clinicasLaPlata,
    ];
  }


  removeFilter(id: any) {
    this.productsService.removeFilter(id);
    this.setInitialFilters();
  }

 
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  tempArrayShow: any = [];
  tempArrayHide: any = [];

  

  showButton() {
    const container = document.querySelector(".center-button");
    container.classList.add("show");
    container.classList.remove("hide");
  }
  vaciarCompareProdList() {
    // Obtenemos la lista
    const lista = this.servicioComparar.compareList;
    
    // Iteramos sobre cada producto y eliminamos la propiedad "comparar"
    lista.forEach(producto => {
      delete producto.compare;
    });
    
    // console.log(' 558  Lista actualizada sin la propiedad "compare":', lista);
    return lista;
  }
  hideButton() {
    const container = document.querySelector(".center-button");
    container.classList.remove("show");
    container.classList.add("hide");
  }

 onItemSelect(selectedClinica: any){
  console.log(' 568  onItemSelect', selectedClinica);
   console.log(this.tempArrayShow);
   console.log(this.tempArrayHide);
  
   console.log(' 572   Selected item:', selectedClinica);


  let newArray = [];
  

  this.productosFiltrados = this.products;

console.log(this.products)
  var seleccion = selectedClinica
  console.log(" 582 this.selectedClinica :",selectedClinica)
  console.log(" 583 seleccion :",seleccion)
  for( let i=0;i<seleccion.length;i++){
    console.log(" 585  seleccion[i] ",seleccion[i])
  }
  var planes = this.productosFiltrados;
  this.showandHide = this.productosFiltrados;
// planes = this.tempArrayHide.concat(this.tempArrayShow);
  var clinicas_seleccionadas = seleccion.map(function (selectas, index, array) {
    return selectas.nombre; 
});
if ( seleccion.length === 0 ){
  for (let j in planes  ){
    this.productosFiltrados[j].validacionclinica = 'show'
  }
 

} else {
for (let j in planes  ) {
  var clinicas = planes[j].clinicas 
var clinicas_del_plan = clinicas.map(function (clinicas_list: { nombre: any; }, index: any, array: any) {
  return clinicas_list.nombre; 
});
var validation = 0
clinicas_seleccionadas.forEach( item => { 
  if (clinicas_del_plan.includes(item) == true){
    validation = validation + 1 ;
  }
})
if ( validation == clinicas_seleccionadas.length){
  planes[j].validacionclinica = 'show'
}else {
  planes[j].validacionclinica = 'hide'
}};
}

// console.log(planes)
this.tempArrayHide  = planes.filter((e:any)=> e.validacionclinica != "show");
this.tempArrayShow  = planes.filter((e:any)=> e.validacionclinica == "show");
console.log(" 621  this.tempArrayShow  :",  this.tempArrayShow)
console.log(" 622  this.tempArrayHide  :",this.tempArrayHide)
this.productosFiltrados = this.tempArrayShow;
console.log('624 this.actualizarProductos(this.productosFiltrados :',this.productosFiltrados)
this.actualizarProductos(this.productosFiltrados)

this.newArray = this.tempArrayShow.concat(this.tempArrayHide);
this.productoService.activarFuncionEnComponenteB();


}   

  // FILTRO DE CLINICAS

  // funcion search - buscar clinica
  search(event: AutoCompleteCompleteEvent) {
    console.log(" 636   Buscando clínicas con:", event.query);
    
    if (!this.clinicas || this.clinicas.length === 0) {
      this.items = [];
      return;
    }
  
    this.items = this.clinicas
      .filter((clinic: any) => clinic && clinic.nombre && typeof clinic.nombre === 'string') // Validamos `clinic` y `nombre`
      .filter((clinic: any) => clinic.nombre.toLowerCase().includes(event.query.toLowerCase()));
  
    // console.log(" 647 Resultados filtrados:", this.items);
  }
    // funcion actiualizar listadod e clinicas

  onSelectedItemsChange(event: any) {
    console.log(' 652   Selected items changed:', event);
    console.log(" 653 this.selectedItems antes ", this.selectedItems);
    this.selectedItems = event;
this.onItemSelect(this.selectedClinica)
const previousSelectedItemslength = this.previousSelectedItems.length;
const selectedItemslength = this.selectedItems.length; // Fix the typo here

console.log(" 659 previousSelectedItems-length  :", previousSelectedItemslength);
console.log(" 660 selectedItems-length  :", selectedItemslength)
  
if(this.previousSelectedItems.length > this.selectedItems.length){
  // Determine removed items
  const removedItems = this.previousSelectedItems.filter(item => !this.selectedItems.includes(item));
    
  console.log(' 666   Removed items:', removedItems);
  this.onItemDeSelect(removedItems)
  // Update the previous state
    // Update the previous state
    this.previousSelectedItems = this.selectedItems.slice();
    console.log('671  this.previousSelectedItems:',this.previousSelectedItems)
    }else if( this.previousSelectedItems.length < this.selectedItems.length ){
        
      const addedItems = this.selectedItems.filter(item => !this.previousSelectedItems.includes(item));
      console.log(" 674 addedItems  :", addedItems)
      this.previousSelectedItems = this.selectedItems;
    this.onItemSelect(this.selectedClinica)
    // Add your specific logic here
  }
  }

  
  onItemDeSelect(item: any[]){
    console.log(' 683   onItemDeSelect', item)
    //  // console.log(this.tempArrayShow);
    //  // console.log(this.tempArrayHide);
    
   
  
    let newArray = [];
    
  
    this.productosFiltrados = this.productosFiltrados;
  
  // console.log(this.products)
  var seleccion = this.selectedClinica
  console.log('696 seleccion.length  ',seleccion.length)

    // for( let i=0;i<seleccion.length;i++){
    //   console.log(' 698   seleccion.length   :')
    //   console.log(seleccion.length)

    //   console.log(' 701    seleccion[i]   :')
    //   console.log(seleccion[i])
    // }
    var planes = this.productosFiltrados;
    this.showandHide = this.productosFiltrados;
  // planes = this.tempArrayHide.concat(this.tempArrayShow);
    var clinicas_seleccionadas = seleccion.map(function (selectas: { nombre: any; }, index: any, array: any) {
     console.log(' 708    selectas.nombre  ',selectas.nombre)
      return selectas.nombre; 
  });
  if ( seleccion.length === 0 ){
    for (let j in planes  ){
      this.productosFiltrados[j].validacionclinica = 'show'
    }
   
  
  } else {
  for (let j in planes  ) {
    let clinicas = planes[j].clinicas 
  let clinicas_del_plan = clinicas.map(function (clinicas_list: { entity: any; }, index: any, array: any) {
    return clinicas_list.entity;
  });
  let validation = 0
  clinicas_seleccionadas.forEach( item => { 
    if (clinicas_del_plan.includes(item) == true){
      validation = validation + 1 ;
    }
  })
  console.log(' ')
  if ( validation === clinicas_seleccionadas.length){
    planes[j].validacionclinica = 'hide'
  }else {
    planes[j].validacionclinica = 'show'
  }};
  }
  console.log('742 planes   ',planes)
  this.tempArrayHide  = planes.filter((e:any)=> e.validacionclinica != "show");
  this.tempArrayShow  = planes.filter((e:any)=> e.validacionclinica == "show");
  console.log('745 this.tempArrayShow   ',this.tempArrayShow)
  console.log('746 this.tempArrayHide   ',this.tempArrayHide)
  this.productosFiltrados = this.tempArrayShow;
  console.log('749 this.actualizarProductos(this.productosFiltrados :',this.productosFiltrados)

  this.actualizarProductos(this.productosFiltrados)
  
  this.newArray = this.tempArrayShow.concat(this.tempArrayHide);
  this.productoService.activarFuncionEnComponenteB();
  
  
  }   





  filtrarPorClinicasExistente(
    productosFiltrados: any[],
    seleccion: any[]
  ): any[] {
    let planes = productosFiltrados.slice(); // Copia de los productos filtrados existentes
    let clinicas_seleccionadas = seleccion.map((selectas) => selectas.nombre);

    if (seleccion.length === 0) {
      for (let j in planes) {
        planes[j].validacionclinica = "show";
      }
    } else {
      for (let j in planes) {
        let clinicas = planes[j].clinicas;
        let clinicas_del_plan = clinicas.map(
          (clinicas_list: { nombre: any }) => clinicas_list.nombre
        );
        let validation = 0;

        clinicas_seleccionadas.forEach((item) => {
          if (clinicas_del_plan.includes(item)) {
            validation++;
          }
        });

        if (validation === clinicas_seleccionadas.length) {
          planes[j].validacionclinica = "show";
        } else {
          planes[j].validacionclinica = "hide";
        }
      }
    }

    let tempArrayHide = planes.filter((e) => e.validacionclinica !== "show");
    let tempArrayShow = planes.filter((e) => e.validacionclinica === "show");

    return tempArrayShow;
  }




  showComparionSidebar(){
    if(this.compareLength >=1 ){
      console.log('results 797  this.compareLength');
      console.log(this.compareLength);


    } 
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productosFiltrados'] || changes['products']) {
      this.definirLength();
    }
  }
  async ngOnInit(): Promise<void> {
    this.isLoaded = false;
    this.showComparionSidebar()
    this.isSmallScreen
  
        // Al iniciar el componente, verificamos el estado actual de la pantalla
      

        // Nos suscribimos a los cambios del servicio para actualizar isSmallScreen cuando cambien
        this.responsiveService.screenWidth$.subscribe((state) => {
          this.cdr.detectChanges(); // Forzar actualización del DOM
          console.log(' 885     Estado actual de breakpoints:', this.isSmallScreen);
          console.log(' 886     Estado actual de isSamllScreen:', this.isSmallScreen);
          this.isSmall = this.responsiveService.isSmall;
          this.isMedium = this.responsiveService.isMedium;
          this.isLarge = this.responsiveService.isLarge;
          this.componentSelectorMode(state.breakpoints);
        });
        this.dialogService.visible$.subscribe((value) => {
          console.log("Valor actual de visible$: ", value);
          this.visible = value; // Asigna el valor a una propiedad del componente
        });
    
 






    // Comprobar si hay datos en caché dentro de ngOnInit
    let cachedProducts: any[] | null = null;
    await caches.open("products").then((cache) => {
      cache.match("productos").then((response) => {
        if (response) {
          response.json().then((products) => {
            cachedProducts = products;
            // console.log(" 848 Productos obtenidos de la caché:", cachedProducts);
          });
        }
      });
    });
    let formData = this.dataFormularios.getFormularioData();
    // console.log(" 854 formData :", formData);
    // Lógica para usar datos iniciales o cacheados
    if (!formData && !cachedProducts) {
      this.dataFormularios.setFormularioData(this.formDataInicial.value);
      formData = this.dataFormularios.getFormularioData();
      // console.log(" 859  Usando datos iniciales del formulario : ", formData);
    } else if (!formData && cachedProducts) {
      // console.log("results 861 this.productosFiltrados = cachedProducts;");

      this.productosFiltrados = cachedProducts;
    }

    // Si hay datos del formulario, realiza la solicitud de precios
    if (formData) {
      // console.log(" 868   Datos del formulario disponibles:", formData);
      this.cotizacionService.getPrecios(formData).subscribe(
        (response: Planes) => {
          const tipo: string = formData.tipo;
          this.products = response;
          // console.log('this.products 873  :')
          // console.log(this.products)

          setTimeout(() => {
            // console.log('this.products.resultado 877:')
            // console.log(this.products )

            // console.log('this.products.resultado  880:' )
            // console.log(this.products.resultado )

            // la propiedad tipo no esta no es una propiedad de los planes , no se porque quice filtrar, es un dato del formulario 
            // this.productosFiltrados = this.products.resultado.filter(
            //   (product: { tipo: string }) => product.tipo === tipo
            // );

            // Guardar productos filtrados en caché
            caches.open("products").then((cache) => {
              // console.log("results 890 JSON.stringify(this.productosFiltrados)")

              const productosResponse = new Response(
                JSON.stringify(this.productosFiltrados)
              );
              cache
                .put("productos", productosResponse)
                .then(() => {
                  // console.log(" 898 Productos almacenados en caché:", productosResponse);
                })
                .catch((cacheError) => {
                  // console.error("901 Error al almacenar en caché:", cacheError);
                });
            });
// console.log(' 904   this.products.resultado 785',this.products.resultado)
            // Actualizar la vista con los productos
            this.compareProdList();
            this.onItemSelect(this.selectedClinica);
          }, 0);
        },
        (error: any) => {
          // console.error("Error en la solicitud de precios:", error);
        }
      );
    }

    // Observadores y configuraciones adicionales
    this.SortbyParamControl.valueChanges.subscribe((selectedValue: string) => {
      // console.log(" 918 Nuevo valor seleccionado:", selectedValue);
    });

    this.empresa.valueChanges.subscribe((selectedValue: string) => {
      // console.log(" 922 Valor seleccionado de la empresa:", selectedValue);
    });

    this.productoService.filteredProducts$.subscribe((filteredProducts) => {
      // console.log(" 926 this.productosFiltrados = filteredProducts;");
      this.productosFiltrados = filteredProducts;
    });

    this.productoService.eventoFilterClinicas$.subscribe(() => {
            // console.log(" 931 this.productosFiltrados = filteredProducts;");

      this.productosFiltrados = this.filtrarPorClinicasExistente(
        this.productosFiltrados,
        this.selectedClinica
      );
    });

    this.productoService.productosFiltrados$.subscribe((productos) => {
      this.productosFiltrados = productos;
    });

    // this.breakpointObserver
    //   .observe([Breakpoints.Handset, Breakpoints.Tablet])
    //   .subscribe((result) => {
    //     this.isSmallScreen = result.matches;
    //   });

    setTimeout(() => {
      this.isLoaded = true;
    }, 4000);

    if (!this.productosFiltrados) {
      this.productosFiltrados = this.products;
    }
    this.SortbyParamControl.valueChanges.subscribe((selectedValue: string) => {
      // Realiza acciones basadas en el valor seleccionado
      // console.log(' 958  Nuevo valor seleccionado:', selectedValue);
    });
    this.empresa.valueChanges.subscribe((selectedValue: string) => {
      // Realiza accioNuevones basadas en el valor seleccionado de la empresa
      // console.log(' 962  valor seleccionado de la empresa:', selectedValue);
      // Puedes agregar aquí la lógica para filtrar o realizar otras acciones
    });
    this.productoService.filteredProducts$.subscribe((filteredProducts) => {
      this.productosFiltrados = filteredProducts;
      // Aquí puedes usar los productos filtrados en tu componente
      // console.log(' 968  Productos filtrados:', filteredProducts);
    });

    this.productoService.eventoFilterClinicas$.subscribe(() => {
      this.productosFiltrados = this.filtrarPorClinicasExistente(
        this.productosFiltrados,
        this.selectedClinica
      );
    });

    this.productoService.productosFiltrados$.subscribe((productos) => {
      this.productosFiltrados = productos;
      // Realiza cualquier acción que necesites con los datos actualizados.
    });
    // console.log(' 982   this.products.resultado 2',this.products.resultado)

    this.compareProdList();
    this.onItemSelect(this.selectedClinica);

    

    // this.breakpointObserver
    //   .observe([Breakpoints.Handset, Breakpoints.Tablet])
    //   .subscribe((result) => {
    //     this.isSmallScreen = result.matches;
    //   });
  }
  onEmpresaFilter() {
    // Obtener el valor del FormControl y asignarlo a SearchEmpresa
    this.SearchEmpresa = this.empresa.value;
  }

  onEmpresaFilterClear() {
    // Limpiar el valor de SearchEmpresa y restablecer el valor del{} FormControl
    this.SearchEmpresa = "";
    this.empresa.setValue("Empresa");
  }

  onSelectAll(items: any) {
    // console.log(' 1007 onSelectAll', items);
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      allowSearchFilter: this.ShowFilter,
    });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: 2,
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: null,
      });
    }
  }

  ngOnDestroy(): void {
    // Nos desuscribimos para evitar fugas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onClinicaFilter() {
    this.SearchClinica = "show";
  }

  onClincaFilterClear() {
    this.SearchClinica = "";
  }

  onSortDirection() {
    if (this.SortDirection === "desc") {
      this.SortDirection = "asc";
    } else {
      this.SortDirection = "desc";
    }
  }
  getPlanes() {
    this.data.getPlanes().subscribe((response: { [x: string]: any }) => {
      this.planes = response["data"];
    });
  }

  toggle() {
    this.show = !this.show;

    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }

  productArray: any = [];
  arrays: any = [];

  // getProduct(){
  //   this.arrays = this.api.productService();
  // }

  tempArray: any = [];
  newArray: any = [];
  onChange(event: any) {
    if (event.target.checked) {
      this.tempArray = this.arrays.filter(
        (e: any) => e.id == event.target.value
      );

      this.productArray = [];
      this.newArray.push(this.tempArray);
      // console.log(this.newArray)
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          this.productArray.push(obj);
          // console.log(this.productArray);
        }
      }
    } else {
      this.tempArray = this.productArray.filter(
        (e: any) => e.id != event.target.value
      );
      this.newArray = [];
      this.productArray = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i]; // console.log(firstArray);
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          this.productArray.push(obj);
          // console.log(this.productArray);
        }
      }
    }
  }

  // ngAfterViewInit(): void {

  //   this.scroller.elementScrolled().pipe(
  //     map(() => this.scroller.measureScrollOffset('bottom')),
  //     pairwise(),
  //     filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
  //     throttleTime(200)
  //   ).subscribe(() => {
  //     this.ngZone.run(() => {
  //       this.offset += 1;
  //       this.itemsService.fetchMore(this.query, this.offset, this.limit);
  //     });
  //   });
  // }

  onTextChange(query: string) {
    this.itemsService.items.length = 0;
    this.query = query;
    this.itemsService.searchClinicas(query);
    // this.itemsService.fetchMore(query);
  }

  onTextClear() {
    this.itemsService.items.length = 0;
    this.query = "";
    this.itemsService.fetchMore(this.query);
  }

  selectToCompare(item: any) {
    // Verifica si el elemento ya está seleccionado por su item_id
    if (
      this.itemsService.itemsSelected.findIndex(
        (elem) => elem.item_id === item.item_id
      ) !== -1
    ) {
      this.notifierService.showNotification(
        "¡Este elemento ya está seleccionado!",
        "Descartar"
      );
      return;
    }

    // Si el elemento no está seleccionado, agrégalo a la lista de elementos seleccionados
    this.itemsService.addSelection(item);

    if (this.itemsService.itemsSelected.length > 1) {
      this.itemsService.buildComparisonReport();
    }
  }

  removeSelectedItem(item: any) {
    this.itemsService.removeSelection(item);
    {
      // console.log(' 1160 ok')
    }
  }

  removeSelection(item: any) {
    const index = this.selectedClinica.indexOf(item);
    if (index !== -1) {
      this.selectedClinica.splice(index, 1);
    }
    // this.productoService.activarFuncionEnComponenteB();

    this.onItemSelect(this.selectedClinica);
    // this.productoService.activarFuncionEnComponenteB();
    
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }

  checkIfCompareListHasItems() {
    if (this.compareProdList().length >= 1) {

    }
  }

  openDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }
  filterProductsByRating(selectedRating: number) {
    // Filtra los productos según la calificación seleccionada
    this.filteredProducts = this.products.filter((product: { rating: number; }) => {
      return product.rating >= selectedRating;
    });
  }

  actualizarProductos(nuevosProductos: any[]): void {
    console.log('results 1209 actualizarProductos(nuevosProductos: any): void {')
   console.log('nuevosProductos  ',nuevosProductos)
    this.productoService.setProductosFiltrados(nuevosProductos);
  }

  // Cambiar el número de productos por página
  onItemsPerPageChange(event: any) {
    this.itemsPerPage = event.target.value;
    this.currentPage = 1; // Volver a la primera página cuando cambia la cantidad
    console.log(`Productos por página: ${this.itemsPerPage}`);
  }

  // Ir a la página seleccionada
  goToPage(page: number) {
    this.currentPage = page;
    console.log(`Ir a la página: ${page}`);
  }

  // Ir a la página anterior
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Ir a la siguiente página
  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  // Ir a la primera página
  goToFirstPage() {
    this.currentPage = 1;
  }

  // Ir a la última página
  goToLastPage() {
    this.currentPage = this.getTotalPages();
  }
	getTotalPages(): number {
    let filteredItems: number
		if(this.productosFiltrados){
    // Calcular el número total de páginas en función de la cantidad de productos filtrados
		// console.log('results 1230  const filteredItems = this.productosFiltrados.length;');
    filteredItems = this.productosFiltrados.length; // Cantidad de productos filtrados
    // console.log('results 1232  return Math.ceil(filteredItems / this.itemsPerPage);');
    } else {
      // console.log('results 1234  const filteredItems = this.productosFiltrados.length;');
    filteredItems = this.products.length; // Cantidad de productos filtrados
    // console.log('results 1236  return Math.ceil(filteredItems / this.itemsPerPage);');
    }
    return Math.ceil(filteredItems / this.itemsPerPage);
	  }
	  

	getPaginationArray(): number[] {
		return Array(this.getTotalPages())
			.fill(0)
			.map((x, i) => i + 1);
	}

	getPagedData(): any[] {
		const startIndex = (this.currentPage - 1) * this.itemsPerPage;
		const endIndex = startIndex + this.itemsPerPage;
		return this.productosFiltrados.slice(startIndex, endIndex);
	}

	// Calcula totalItems en función de la longitud de la lista de datos
	calculateTotalItems() {
		this.totalItems = this.filteredProducts.length;
	}



	onSortByChange(event: any) {
		if (event && event.target && event.target.value) {
			const selectedOption: string = event.target.value;
			// console.log(' 1264selectedOption:', selectedOption);
			this.SortbyParam = selectedOption;
			this.SortbyParam = selectedOption;

			// Emite el valor seleccionado al componente padre
			this.selectionChange.emit(selectedOption);

			// Realiza cualquier acción adicional que necesites aquí, como volver a cargar los datos ordenados.
		} else { 
      // console.log(' 1273 selectedOption: error');
    }
	}

	// Function to handle filtering based on selected criteria
	applyFilter() {
		if (this.SearchEmpresa === 'Empresa') {
			// No filter selected, show all products
			this.filteredProducts = [...this.ranking];
		} else {
			// Apply the filter based on this.SearchEmpresa
			this.filteredProducts = this.ranking.filter((product) => {
				this.currentPage = 1;

				// Replace 'entity' with the actual property name to filter by
				return product.entity === this.SearchEmpresa;
			});
		}

		// Optionally, you can add sorting logic here if needed
	}

	applyOrder() {
		if (this.SortbyParam === 'Empresa') {
			// No filter selected, show all products
			this.filteredProducts = [...this.ranking];
		} else {
			// Apply the filter based on this.SearchEmpresa
			this.filteredProducts = this.ranking.filter((product) => {
				// Replace 'entity' with the actual property name to filter by
				return product.entity === this.SearchEmpresa;
			});
		}
		// Optionally, you can add sorting logic here if needed
	}

  getColumnConfig(): string {
    if (this.isLarge) {
      return '12'; // 1 columna para pantallas grandes
    } else if (this.isMedium) {
      return '6'; // 2 columnas para pantallas medianas
    } else if (this.isSmall) {
      return '4'; // 3 columnas para pantallas pequeñas
    } else {
      return ; // Valor predeterminado en caso de que no haya coincidencia
    }
  }
}
