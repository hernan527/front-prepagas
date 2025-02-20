import { Component } from '@angular/core';
import { BENEFITS_DATA_ITEMS } from './../../../../../data/constants/mock';
import { Benefit } from './../../../../../data/interfaces';

@Component({
    selector: 'app-benefits-section',
    templateUrl: './benefits-section-acierto.component.html',
    styleUrls: ['./benefits-section.component.scss'],
    standalone: true,
})
export class BenefitsSectionComponent {
	// data constants
	public benefits: Benefit[] = BENEFITS_DATA_ITEMS;

	// trackBy functions
	trackByBenefits = (_: number, item: Benefit): number => item.id;
}
