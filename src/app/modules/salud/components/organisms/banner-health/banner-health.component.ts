import { Component,HostListener } from '@angular/core';
import {
    NxBreadcrumbComponent,
    NxBreadcrumbItemComponent,
} from '@aposin/ng-aquila/breadcrumb';
import { NxCopytextComponent } from '@aposin/ng-aquila/copytext';
import { NxHeadlineComponent } from '@aposin/ng-aquila/headline';
import { NxIconComponent } from '@aposin/ng-aquila/icon';
import { NxLinkComponent } from '@aposin/ng-aquila/link';
import {
    NxSmallStageComponent,
    NxSmallStageHeaderDirective,
    NxSmallStageImageBottomDirective,
    NxSmallStageImageDirective,
    NxSmallStageImageEndDirective,
    NxSmallStageImageStartDirective,
} from '@aposin/ng-aquila/small-stage';
import { FormBannerComponent } from '../../atoms/form-banner/form-banner.component';
import { SearchFormComponent } from '../../atoms/search-form/search-form.component';
/**
 * @title Small stage content variation example
 */
@Component({
  selector: 'app-banner-health',
  imports: [ NxSmallStageComponent,
    NxLinkComponent,
    NxSmallStageHeaderDirective,
    NxIconComponent,
    NxHeadlineComponent,
    NxSmallStageImageDirective,
    NxSmallStageImageStartDirective,
    NxSmallStageImageEndDirective,
    NxSmallStageImageBottomDirective,
    NxBreadcrumbComponent,
    NxBreadcrumbItemComponent,
    NxCopytextComponent,
    FormBannerComponent,
    SearchFormComponent
  ],
  templateUrl: './banner-health.component.html',
  styleUrl: './banner-health.component.css'
})
export class BannerHealthComponent {
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Lógica para que el botón sea sticky después de cierto scroll
    this.isSticky = window.pageYOffset > 100; // Ajusta el valor a tu necesidad
  }
}
