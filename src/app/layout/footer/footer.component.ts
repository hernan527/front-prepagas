import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    NxFooterComponent,
    NxFooterCopyrightDirective,
    NxFooterLinkDirective,
    NxFooterNavigationDirective,
} from '@aposin/ng-aquila/footer';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [
        NxFooterComponent,
        NxFooterCopyrightDirective,
        NxFooterLinkDirective,
        NxFooterNavigationDirective,
    ]
})
export class FooterComponent {
    readonly currentYear = new Date().getFullYear();
}
