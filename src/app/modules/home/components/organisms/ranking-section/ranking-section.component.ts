import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FILTER_DATA_ITEMS, ORDER_DATA_ITEMS, RANKING_DATA_ITEMS } from './../../../../../data/constants/mock';
import { Ranking, SelectOption } from './../../../../../data/interfaces';
import { createSlug } from './../../../../../shared/utils';

@Component({
	selector: 'app-ranking-section',
	templateUrl: './rankingQP-section.component.html',
	styleUrls: ['./rankingQP-section.component.css'],
})
export class RankingSectionComponent implements OnInit {
	@Output() selectionChange = new EventEmitter<string>();
	// data constants
	public ranking: Ranking[] = RANKING_DATA_ITEMS;
	public filters: SelectOption[] = FILTER_DATA_ITEMS;
	public orderWays: SelectOption[] = ORDER_DATA_ITEMS;
	filteredProducts: any[] = [];
	currentPage = 1; // Página actual
	itemsPerPage = 4; // Cantidad de elementos por página
	totalItems = 0; // Cantidad total de elementos en tu lista
	entity = 'Empresa';
	SearchEmpresa = '';
	SortbyParam = 'empresa'; // Valor inicial
	SortDirection = 'asc';
	showFiller = false;
	selectedOption!: string;
	label = '';
	options: any[] = [];
	get key(): string {
		return createSlug(this.label);
	}

	constructor() {
		// Initialize the filtered array with all products
		this.filteredProducts = [...this.ranking];
	}
	trackByOptions = (_: number, item: any): any => item.id;

	ngOnInit() {
		this.calculateTotalItems(); // Llama a la función para establecer totalItems automáticamente
	}
	// trackBy functions
	trackByRanking = (_: number, item: Ranking): number => item.id;

	prevPage() {
		if (this.currentPage > 1) {
			this.currentPage--;
			setTimeout(() => {
				this.currentPage--;
			}, 2000);
		}
	}

	nextPage() {
		if (this.currentPage < this.getTotalPages()) {
			this.currentPage++;
		}
	}

	goToPage(page: number) {
		if (page >= 1 && page <= this.getTotalPages()) {
			this.currentPage = page;
		}
	}

	getTotalPages(): number {
		// Calcular el número total de páginas en función de la cantidad de productos filtrados
		const filteredItems = this.filteredProducts.length; // Cantidad de productos filtrados
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
		return this.filteredProducts.slice(startIndex, endIndex);
	}

	// Calcula totalItems en función de la longitud de la lista de datos
	calculateTotalItems() {
		this.totalItems = this.filteredProducts.length;
	}

	onEmpresaFilter() {
		this.SearchEmpresa = this.entity;
	}

	onEmpresaFilterClear() {
		this.SearchEmpresa = '';
		this.entity = 'Empresa';
	}

	onSortDirection() {
		if (this.SortDirection === 'desc') {
			this.SortDirection = 'asc';
		} else {
			this.SortDirection = 'desc';
		}
	}

	onSortByChange(event: any) {
		if (event && event.target && event.target.value) {
			const selectedOption: string = event.target.value;
			console.log('selectedOption:', selectedOption);
			this.SortbyParam = selectedOption;
			this.SortbyParam = selectedOption;

			// Emite el valor seleccionado al componente padre
			this.selectionChange.emit(selectedOption);

			// Realiza cualquier acción adicional que necesites aquí, como volver a cargar los datos ordenados.
		} else console.log('selectedOption: error');
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
}
