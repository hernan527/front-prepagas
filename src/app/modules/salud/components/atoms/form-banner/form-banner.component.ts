import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-form-banner',
    templateUrl: './form-banner.component.html',
    styleUrls: ['./form-banner.component.css'],
    imports: [FormsModule,CommonModule]
})
export class FormBannerComponent {
  @Input() isSmallScreen = false;

}
