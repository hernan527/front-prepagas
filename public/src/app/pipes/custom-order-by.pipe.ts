import { Pipe, PipeTransform } from '@angular/core';
import { Ranking } from './../../data/interfaces';

@Pipe({
	name: 'customOrderBy',
})
export class CustomOrderByPipe implements PipeTransform {
	transform<T>(items: T[], field: keyof T, reverse = false): T[] {
		if (!items || !field) {
			return items;
		}

		items = [...items]; // Copia de la lista original
		items.sort((a, b) => {
			const x = a[field];
			const y = b[field];
			return (x < y ? -1 : 1) * (reverse ? -1 : 1);
		});

		return items;
	}
}
