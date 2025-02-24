import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footerQP.componet.html',
    styleUrls: ['./footerQP.componet.css'],
    imports: []
})
export class FooterComponent {
	public year: number = new Date().getFullYear();
}
