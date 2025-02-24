import { Component } from '@angular/core';
import { Credit } from './../../../../data/interfaces';
import { CREDIT_DATA_ITEMS } from './../../../../data/constants/mock';
import { ResultComponent } from '../../components/molecules/result/result.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
    imports: [NgFor, ResultComponent]
})
export class ResultsComponent {
	// data constants
	public credits: Credit[] = CREDIT_DATA_ITEMS;

	// trackBy functions
	trackByCredits = (_: number, item: Credit): number => item.id;
}
