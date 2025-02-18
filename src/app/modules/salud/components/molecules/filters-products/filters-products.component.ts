import { Component, OnInit,Input,ChangeDetectorRef, EventEmitter,Output,SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../../../../../services/products.service';
import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';
import { Quote } from '../../../../../data/interfaces/interfaces';

 @Component({
  selector: 'app-filters-products',
  templateUrl: './filters-products.component.html',
  styleUrls: ['./filters-products.component.css']
})
export class FiltersProductsComponent implements OnInit  {
   @Input() isSmallScreen = false;
   @Input() sidebarVisible = false;
   @Input() anchoSidebar: any;
  @Input() product: any[];
  @Input() productosFiltrados: any[];
  @Output() filteredProductsChange = new EventEmitter<any[]>(); // Emite los productos filtrados
  filtrosSeleccionadosGroup: FormGroup
  filteredProducts: any[]; // Almacena los productos filtrados
  selectedRating : FormControl = new FormControl(0);
  formFilter: FormGroup;
  multiDefaultOption: any[] = []; 
  tooltipContent: string = 'Your tooltip content here';
  rangeValues: FormControl = new FormControl(''); 
  slide3Values: FormControl = new FormControl(''); 
  slide4Values: FormControl = new FormControl(''); 
  valueSlide3: FormControl = new FormControl(''); 
  valueSlide4: FormControl = new FormControl(''); 
  checkboxOptions = {
  PMO_Solo_por_Aportes :new FormControl(false),
  Cirugia_Estetica:new FormControl(false),
  Ortodoncia_Adultos:new FormControl(false),
  Habitacion_Individual :new FormControl(false),
  Cobertura_Nacional:new FormControl(false),
  Sin_Copagos:new FormControl(false),
    // Agrega más opciones según sea necesario
  }
  PMO_Solo_por_Aportes  = this.checkboxOptions['PMO_Solo_por_Aportes'].value;
  Cirugia_Estetica = this.checkboxOptions['Cirugia_Estetica'].value;
  Ortodoncia_Adultos = this.checkboxOptions['Ortodoncia_Adultos'].value;
  Habitacion_Individual  = this.checkboxOptions['Habitacion_Individual'].value;
  Cobertura_Nacional = this.checkboxOptions['Cobertura_Nacional'].value;
  Sin_Copagos = this.checkboxOptions['Sin_Copagos'].value;
 

  val: number; // Variable para el valor mínimo del rango de precios
  val2: number; // Variable para el valor máximo del rango de precios
  val3: number;
  val4: number;
  filterKeys: string[]; // Agrega esta variable para almacenar las claves de los filtros
  priceRange: FormControl = new FormControl('');  
  quote: Quote;
  element =  document.getElementById("is3dCheckBox"); 

  constructor(
    private formBuilder: FormBuilder,
    private filterManagerService: ProductsService,
    private cdr: ChangeDetectorRef,
    private retornarService: ServcioRetornoPrecioService,
   
  ){  
    
    this.filterKeys = Object.keys(this.checkboxOptions);

    this.filtrosSeleccionadosGroup = this.formBuilder.group({
      selectedRating:[this.selectedRating.value],
      priceRange: this.rangeValues,
      valueSlide3: [this.slide3Values.value],
      valueSlide4: [this.slide4Values.value],
      PMO_Solo_por_Aportes: [this.PMO_Solo_por_Aportes],
      Cirugia_Estetica: [this.Cirugia_Estetica],
      Ortodoncia_Adultos: [this.Ortodoncia_Adultos],
      Habitacion_Individual: [this.Habitacion_Individual],
      Cobertura_Nacional: [this.Cobertura_Nacional],
      Sin_Copagos: [this.Sin_Copagos],
    
      });  
      this.filterManagerService.setForm(this.filtrosSeleccionadosGroup);

    
  }


  private buildForm(){

   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - Cambios detectados:', changes);

    // Aquí puedes iterar sobre los cambios y trabajar con cada propiedad
    for (const propName in changes) {
      const change = changes[propName];
      console.log(`Propiedad: ${propName}`);
      console.log(`Anterior: ${change.previousValue}`);
      console.log(`Actual: ${change.currentValue}`);
      console.log(`Primer cambio: ${change.firstChange}`);
    }
  }

  ngOnInit(): void {
    this.quote = {
      adultos: 1,
      menores: 0,
      region: "GBA"
    }
    console.log('Filtros seleccionados:', this.filtrosSeleccionadosGroup.value);
   
           console.log('ngOnInit - Valores iniciales:', {
      isSmallScreen: this.isSmallScreen,
      sidebarVisible: this.sidebarVisible,
      anchoSidebar: this.anchoSidebar
    });
  

  
    this.filtrosSeleccionadosGroup.valueChanges.subscribe(() => {
      console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);
// 
      this.applyFilters(this.filtrosSeleccionadosGroup);
// 
    });
  
    this.retornarService.disparadorDePrecio.subscribe(data => {
      console.log('Recibiendo data en product.list.component.ts...', data);
      if (data.edad_2 > 0 ) {
        this.quote.adultos = 2
        
      } else {
        this.quote.adultos = 1
      } 
        this.quote.menores = data.numkids

        if(data.region){
          this.quote.region = data.region
        }else{
        this.quote.region = 'AMBA'

        }
      })
    
    
    this.selectedRating.valueChanges.subscribe((selectedValue: number) => {
      console.log('Valor seleccionado de la calificación:', selectedValue);
      const selectedArray = [0, 1, 2, 3, 4, 5].slice(0, selectedValue + 1);
      // Registra el cambio en el formulario
      this.filtrosSeleccionadosGroup.get('selectedRating')?.setValue(selectedArray);
      // Envía el formulario actualizado al servicio
      this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
      this.filterManagerService.applyFiltersDespuesDeOnItemSelect();
         
    
      this.filtrosSeleccionadosGroup.valueChanges.subscribe(() => {
        console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);
  // 
        this.applyFilters(this.filtrosSeleccionadosGroup);
  // 
      });

    });
    
      this.rangeValues.valueChanges.subscribe((newValues) => {
        console.log('Valor mínimo del rango de precios:', newValues[0]);
        console.log('Valor máximo del rango de precios:', newValues[1]);
        // Registra los cambios en el formulario
        this.filtrosSeleccionadosGroup.get('priceRange')?.setValue(newValues);
        // Envía el formulario actualizado al servicio
        // this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
        // this.filterManagerService.applyFiltersDespuesDeOnItemSelect();
         
      
        this.filtrosSeleccionadosGroup.valueChanges.subscribe(() => {
          console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);
    // 
          this.applyFilters(this.filtrosSeleccionadosGroup);
    // 
        });

      });
       this.slide3Values.valueChanges.subscribe((newValues) => {
        console.log('Valor mínimo de valueSlide3:', newValues);
        // Registra los cambios en el formulario
        this.filtrosSeleccionadosGroup.get('valueSlide3')?.setValue(newValues);
        // Envía el formulario actualizado al servicio
        this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
        this.filterManagerService.applyFiltersDespuesDeOnItemSelect();
         
      
        this.filtrosSeleccionadosGroup.valueChanges.subscribe(() => {
          console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);
    // 
          this.applyFilters(this.filtrosSeleccionadosGroup);
    // 
        });

      });

      this.slide4Values.valueChanges.subscribe((newValues) => {
        console.log('Valor mínimo de valueSlide4:', newValues);
        // Registra los cambios en el formulario
        this.filtrosSeleccionadosGroup.get('valueSlide4')?.setValue(newValues);
        // Envía el formulario actualizado al servicio
        this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
        this.filterManagerService.applyFiltersDespuesDeOnItemSelect();
           
      
        this.filtrosSeleccionadosGroup.valueChanges.subscribe(() => {
          console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);
    // 
          this.applyFilters(this.filtrosSeleccionadosGroup);
          
          this.filtrosSeleccionadosGroup.valueChanges.subscribe(() => {
            console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);
      // 
            this.applyFilters(this.filtrosSeleccionadosGroup);
      //     
          });
    // 
        });

        
      });
      this.filterManagerService.filteredProducts$.subscribe(filteredProducts => {
        this.productosFiltrados = filteredProducts
        // Aquí puedes usar los productos filtrados en tu componente
        console.log('Productos filtrados:', filteredProducts);
      });
      this.filterManagerService.eventoFiltering$.subscribe(() => {
console.log('se activo en el componente B')
console.log(this.filtrosSeleccionadosGroup)
        
        this.applyFiltersDespuesDeOnItemSelect(this.filtrosSeleccionadosGroup);

      });


      this.filterManagerService.productosFiltrados$.subscribe((productos) => {
        this.productosFiltrados = productos;
        console.log(productos)
        // Calcula el nuevo rango de precios
  // const rangoPrecios = this.obtenerRangoDePrecios(productos);
console.log(this.obtenerRangoDePrecios(productos))
  // Actualiza los valores de this.val y this.val2
  // this.val = rangoPrecios.min;
  // this.val2 = rangoPrecios.max;

  // Realiza cualquier otra acción que necesites con los datos actualizados.
      });
          Object.keys(this.checkboxOptions).forEach((key) => {
            const control = this.checkboxOptions[key];
            control.valueChanges.subscribe((newValue: any) => {
              console.log(`El valor de ${key} ha cambiado a ${newValue}`);
              // Registra el cambio en el formulario
              this.filtrosSeleccionadosGroup.get(key)?.setValue(newValue);
              // Envía el formulario actualizado al servicio
              this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
              this.filterManagerService.applyFiltersDespuesDeOnItemSelect()
              console.log('Esta es la fila 194 ; ' ,this.filtrosSeleccionadosGroup.value);

            });

          });
          
     // Verificar si hay productos filtrados

 

  
    
  

  }
  
  

  aplicarFiltro() {
    // Aquí puedes agregar la lógica para aplicar el filtro
    // Por ejemplo, puedes utilizar this.val y this.val2 para filtrar datos
    console.log('Se hizo clic en el botón Aplicar');
    console.log('Valor mínimo del rango de precios: ', this.rangeValues.value[0]);
    console.log('Valor máximo del rango de precios: ', this.rangeValues.value[1]);
    console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);


    // Luego puedes realizar las acciones necesarias para aplicar el filtro a tus datos
    // Por ejemplo, puedes enviar una solicitud de filtro a tu API o actualizar la lista de productos
  }
  onRangeChange(event: any) {
    // Los valores del rango de precios han cambiado, actualiza los valores y muestra en la consola
    this.val = event.values[0];
    this.val2 = event.values[1];
    console.log('Valor seleccionado para el precio: ', this.val, 'y', this.val2);
  }
  onSlide3Change(event: any) {

    this.val3 = event.value;
    console.log('Valor seleccionado para el slide3: ', this.val3);

  }
  onSlide4Change(event: any) {

    this.val4 = event.value;
    console.log('Valor seleccionado para el slide: ', this.val4);

  }
  getCheckboxOptions() {
    return Object.keys(this.checkboxOptions);
  }
  enviarFiltros() {
    // Aquí puedes obtener los filtros seleccionados de filtrosSeleccionadosGroup
    const filtros = this.filtrosSeleccionadosGroup.value;
    
    // Luego, puedes llamar a setFilterForm para actualizar los filtros en el servicio
    this.filterManagerService.setFilterForm(filtros);
    this.filterManagerService.applyFiltersDespuesDeOnItemSelect()

  }
  eliminarFiltro(option: string) {
    // Cambia el valor del FormControl correspondiente al hacer clic en la "x"
    console.log('opcion :',option)
    console.log('valor true :',this.checkboxOptions[option].value)
    this.checkboxOptions[option].setValue(false);
    console.log('valor false :',this.checkboxOptions[option].value)

    
  
    this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
    this.filterManagerService.applyFiltersDespuesDeOnItemSelect()

  }
  
  

  limpiarTodo() {
    // Limpia todos los checkboxes
    this.filterKeys.forEach((key) => {
      this.filtrosSeleccionadosGroup.get(key)?.setValue(false);
      this.checkboxOptions[key].setValue(false);
    });
    this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
    this.filterManagerService.applyFiltersDespuesDeOnItemSelect()

  }
  cambiarEstadoDelCheckbox() {
    const checkbox = document.getElementById('subscribe') as HTMLInputElement | null;

    if (checkbox != null) {
      // ✅ Establecer el checkbox como marcado
      checkbox.checked = true;

      // ✅ Establecer el checkbox como desmarcado
      // checkbox.checked = false;
    }
  }

 applyFiltersDespuesDeOnItemSelect(form: FormGroup): void {
  console.log('Funcion en componente B activada' + form )
  console.log('Funcion en componente B activada' + this.productosFiltrados )
  this.filterManagerService.filterProducts(form,this.productosFiltrados);
    
 }
 

  applyFilters(form: FormGroup): void {
    // Llama a la función filterProducts del servicio y pasa el formulario de filtros como argumento
    const productosOriginales = this.product; // Ajusta esto según cómo obtengas tus productos
    
    this.filterManagerService.filterProducts(form,productosOriginales);
    // this.filterManagerService.applyFiltersDespuesDeOnItemSelect();

  }
  actualizarProductos(nuevosProductos: any): void {
    this.filterManagerService.setProductosFiltrados(nuevosProductos);
  }
  private obtenerRangoDePrecios(productos: any[]): { min: number, max: number } {
    if (productos.length === 0) {
      return { min: 0, max: 0 };
    }
  
    // Ajusta la propiedad "precio" para obtener los valores de precio
    const precios = productos.map(producto => producto.precio);
    const precioMinimo = Math.min(...precios);
    const precioMaximo = Math.max(...precios);
  
    return { min: precioMinimo, max: precioMaximo };
  }
}