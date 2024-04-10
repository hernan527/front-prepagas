import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MasDetallesComponent } from './mas-detalles.component';
import { MasDetallesPrimengComponent } from './mas-detalles-primeng.component';

import { ClinicasListComponent } from './clinicas-list/clinicas-list.component';
import { ClinicasListPrimengComponent } from './clinicas-list/clinicas-list-p.component';
import { SortPipe } from '../pipes/sort.pipe'

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import {TableModule} from 'primeng/table';
import {MDCDataTable} from '@material/data-table';
import {MatTabsModule} from '@angular/material/tabs';

import {ClinicasListGroupComponent} from './clinicas-list-group/clinicas-list-group.component';
import {ClinicasListGroupPrimengComponent} from './clinicas-list-group/clinicas-list-group-p.component';

import {MatCardModule} from '@angular/material/card';
import { PdfViewerModule} from 'ng2-pdf-viewer';
import { PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { DialogService } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
 







@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        TableModule,
        MatTabsModule,
        MatCardModule,
        PdfViewerModule,
        ReactiveFormsModule,
        MaterialModule,
        // NgxSkeletonLoaderModule,
        SharedModule,
        DialogModule,
        TabViewModule,
    ],
    declarations: [
        MasDetallesComponent,
        ClinicasListComponent,
        ClinicasListGroupComponent,
        PdfViewerComponent,
        ContactFormComponent,
        MasDetallesPrimengComponent,
        ClinicasListPrimengComponent,
        ClinicasListGroupPrimengComponent,
        SortPipe

    ],
    providers: [MDCDataTable,DialogService],
    entryComponents: [ClinicasListGroupComponent,ClinicasListGroupPrimengComponent],
    bootstrap: [ClinicasListGroupComponent,ClinicasListGroupPrimengComponent]
})

export class MasDetallesModule {
   
}





