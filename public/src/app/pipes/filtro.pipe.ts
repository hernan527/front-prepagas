import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value : any[], filtroString: string, propiedadName:string,): any[] {
    const result:any =[];
    if(!value || filtroString==='' || propiedadName ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propiedadName].trim().toLowerCase().includes(filtroString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
