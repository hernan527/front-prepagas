import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';// import { FlexModule } from '@angular/flex-layout/flex';
import { ComparaPorRegionComponent } from './compara-por-region/compara-por-region.component';
import { ComparaClinicasComponent } from './compara-clinicas/compara-clinicas.component';

import {RouterLink, RouterModule} from "@angular/router";

@NgModule({
    imports: [
        MatCardModule,
        MatListModule,
        // FlexModule,
        CommonModule,
        RouterLink,
        RouterModule,
        MatTabsModule,
        ComparaPorRegionComponent,
        ComparaClinicasComponent
    ],
    providers: [],
    exports: [
        ComparaClinicasComponent, ComparaPorRegionComponent
    ]
})
export class ComparaClinicasModule {
}

