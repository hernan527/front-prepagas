import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.css'],
    standalone: true
})
export class EmpresasComponent implements OnInit {


// Declara la propiedad 'route'
constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('se inicia empresa')
    // this.route.paramMap.subscribe(params => {
    //   const productId = params.get('id');
    //   // Ahora, `productId` contiene el valor de 'id' en la URL
    //   console.log(productId);
    // });
  }

}
