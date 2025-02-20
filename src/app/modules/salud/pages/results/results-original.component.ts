import { Component, OnInit } from '@angular/core';
import { Credit } from './../../../../data/interfaces';
import { CREDIT_DATA_ITEMS } from './../../../../data/constants/mock';

@Component({
    selector: 'app-results-original',
    template: `<h2>Hola</h2>`,
    styleUrls: ['./results-original.component.scss'],
    standalone: true,
})
export class ResultsOriginalComponent implements OnInit {
		// data constants
		public credits: Credit[] = CREDIT_DATA_ITEMS;

		// trackBy functions
		trackByCredits = (_: number, item: Credit): number => item.id;
		ngOnInit() {
		}
}

