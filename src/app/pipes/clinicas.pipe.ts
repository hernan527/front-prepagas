import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'clinicas',
    standalone: false
})
export class ClinicasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
