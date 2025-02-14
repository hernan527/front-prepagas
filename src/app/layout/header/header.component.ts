import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './headerQP.component.html',
	styleUrls: ['./headerQP.component.css']
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
