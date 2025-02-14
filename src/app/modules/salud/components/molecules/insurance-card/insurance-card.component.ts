import { Component } from '@angular/core';


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
  styleUrls: ['./insurance-card.component.css']
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