import { Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NxButtonComponent } from '@aposin/ng-aquila/button';
import {
    NxHeaderActionsDirective,
    NxHeaderBrandDirective,
    NxHeaderComponent,
    NxHeaderLinkComponent,
    NxHeaderNavigationComponent,
    NxHeaderNavigationItemDirective,
} from '@aposin/ng-aquila/header';
import { NxLinkComponent } from '@aposin/ng-aquila/link';

/**
 * @title Single Row Header Example
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
	imports: [
        NxHeaderComponent,
        NxHeaderBrandDirective,
        NxLinkComponent,
        NxHeaderNavigationComponent,
        NxHeaderNavigationItemDirective,
        NxHeaderLinkComponent,
        RouterLink,
        RouterLinkActive,
        NxHeaderActionsDirective,
        NxButtonComponent,
    ],
})
export class HeaderComponent {
zz
	constructor(
		private router: Router,
	) {}

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
