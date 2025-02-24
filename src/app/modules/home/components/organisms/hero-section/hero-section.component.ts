import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.componet.css'],
    imports: [
        NgFor,
        RouterLink,
        NgClass,
    ]
})
export class HeroSectionComponent {
INTERNAL_ROUTES: any;


heroButtons = [
  {
    icon: 'fa-heart',
    text: 'Seguros de Salud',
    subtext: 'Para tí y tu familia',
    class: 'btn-health',
    routerLink: '/salud' // Add the routerLink for this button
  },
  {
    icon: 'fa-building',
    text: 'Seguro Empresa',
    subtext: 'Protege a tu equipo',
    class: 'btn-business',
    routerLink: '/empresa'
  },
  {
    icon: 'fa-shield-alt',
    text: 'Planes de Isapres',
    subtext: 'La mejor cobertura',
    class: 'btn-isapres',
    routerLink: '/isapres'
  },
  {
    icon: 'fa-paw',
    text: 'Seguro Mascota',
    subtext: 'Planes para tu mascota',
    class: 'btn-pet',
    routerLink: '/mascota'
  }
];

}
