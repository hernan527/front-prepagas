import { Component } from '@angular/core';
import { SERVICES_DATA_ITEMS } from './../../../../../data/constants/mock';
import { Service } from './../../../../../data/interfaces';

@Component({
    selector: 'app-services-section',
    templateUrl: './services-section-acierto.component.html',
    styleUrls: ['./services-section.component.scss'],
    standalone: true,
})
export class ServicesSectionComponent {
	// data constants
	public services: Service[] = SERVICES_DATA_ITEMS;

	// trackBy functions
	trackByServices = (_: number, item: Service): string => item.id;
}
