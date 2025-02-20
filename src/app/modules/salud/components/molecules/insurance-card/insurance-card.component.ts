import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';


interface Insurance {
  logo: string;
  name: string;
  hospitalCoverage: number;
  ambulatoryCoverage: number;
  price: number;
}

@Component({
    selector: 'app-insurance-card',
    templateUrl: './insurance-card.component.html',
    styleUrls: ['./insurance-card.component.css'],
    standalone: true,
    imports: [MatCheckboxModule]
})
export class InsuranceCardComponent {
  insurance: Insurance = {
    logo: 'https://example.com/logo.png',
    name: 'Seguro Ejemplo',
    hospitalCoverage: 80,
    ambulatoryCoverage: 70,
    price: 147349
  };
}