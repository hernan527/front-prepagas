import { Component } from '@angular/core';
import { STEPS_DATA_ITEMS } from './../../../../../data/constants/mock';

@Component({
	selector: 'app-how-it-works-section',
	templateUrl: './how-it-works-section-acierto.component.html',
	styleUrls: ['./how-it-works-section-acierto.component.css'],
})
export class HowItWorksSectionComponent {
	// data constants
	public steps: string[] = STEPS_DATA_ITEMS;

	// trackBy functions
	trackBySteps = (_: number, item: string): string => item;
}
