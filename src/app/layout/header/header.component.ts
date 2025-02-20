import { Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './headerQP.component.html',
    styleUrls: ['./headerQP.component.css'],
    standalone: true,
    imports: [RouterLink],
})
export class HeaderComponent {

	constructor(private router: Router) {}

	goTologin(): void {
		this.router.navigate(['/login']);
	}

	loginVerified(): boolean {
		const accessToken = 'token';
		if (accessToken) {
			return true;
		}
		return false;
	}
}
