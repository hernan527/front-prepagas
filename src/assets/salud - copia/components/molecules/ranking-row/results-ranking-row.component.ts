import { Component, Input, OnInit } from '@angular/core';
import { Ranking } from '../../../../../data/interfaces';
import { ProductLandComponent } from "./../product-land/product-land.component";
import { ProductCardComponent } from "./../product-card/product-card.component";
import { NgFor } from "@angular/common";
import { ProductsService } from "./../../../../../services/products.service";
import * as planes from "../../../../../../../public/products.json";

@Component({
	selector: 'app-results-ranking-row',
	templateUrl: './results-ranking-row.component.html',
	styleUrls: ['./results-ranking-row.component.scss'],
	standalone: true,
	imports: [ ProductLandComponent, ProductCardComponent, NgFor ]
})
export class ResultsRankingRowComponent  implements OnInit  {
	@Input() row: Ranking = {
		id: 0,
		approvalTime: 0,
		entity: '',
		image: '',
		interestRate: 0,
		procedures: '',
		rating: 0,
	};
	public productosFiltrados: any = (planes as any).default;

	constructor(
			private productoService: ProductsService,
		
	){}

	async ngOnInit(): Promise<void> {
		console.log( 'oninit' )
		this.productoService.filteredProducts$.subscribe((filteredProducts) => {
			this.productosFiltrados = filteredProducts;
		  });
	}
}
