import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'customFilter',
})
export class CustomFilterPipe implements PipeTransform {
	transform(value: unknown, ...args: unknown[]): unknown {
		return null;
	}
}
