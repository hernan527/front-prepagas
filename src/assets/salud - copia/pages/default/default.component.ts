import { Component, HostListener } from '@angular/core';
import {CotizacionService} from './../../../../services/cotizacion.service';
import { FormQueplanComponent } from '../../components/atoms/form-queplan/form-queplan.component';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    imports: [FormQueplanComponent]
})
export class DefaultComponent {
	@HostListener('window:beforeunload', ['$event'])
	unloadNotification($event: any): void {
        'Perdera todos los datos ingresados'
		$event.returnValue = true;
	}
	constructor(
		
		private cotizacionService: CotizacionService,
	){
		
	}
	async ngOnInit(): Promise<void> {
		try {
		  // Espera a que se completen las operaciones asincrónicas
		  await this.cotizacionService.getClinicas();
		  await this.cotizacionService.getPlanes();
	  
		  // Ahora que las operaciones anteriores se han completado, puedes realizar acciones adicionales
	  
		  // Continúa con otras acciones después de obtener y aplicar los coeficientes
		} catch (error) {
		  // Maneja errores aquí si es necesario
		  console.error('Error en ngOnInit:', error);
		}
	  }
	  
}
