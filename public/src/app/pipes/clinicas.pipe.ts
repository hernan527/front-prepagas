import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clinicas'
})
export class ClinicasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
