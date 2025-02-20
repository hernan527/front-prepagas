import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.scss'],
    standalone: true,
    imports: [RouterLink],
})
export class HeroSectionComponent {
INTERNAL_ROUTES: any;
}
