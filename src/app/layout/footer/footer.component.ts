import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footerQP.componet.html',
    styleUrls: ['./footerQP.componet.css'],
    standalone: true,
    imports: [RouterLink],
})
export class FooterComponent {
	public year: number = new Date().getFullYear();
}
