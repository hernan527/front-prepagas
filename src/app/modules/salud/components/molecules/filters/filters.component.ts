import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
    selector: 'app-filters',
    templateUrl: './filtersQP.component.html',
    styleUrls: ['./filtersQP.component.css'],
    standalone: true,
    imports: [MatFormFieldModule, MatCheckboxModule, MatButtonModule]
})
export class FiltersComponent {

}