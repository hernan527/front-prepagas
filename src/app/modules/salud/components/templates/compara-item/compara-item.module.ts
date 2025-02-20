import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ComparaItemComponent } from './compara-item.component';
import { ComparaClinicasModule } from './compara-clinicas/compara-clinicas.module';
import { ComparaAttributesComponent } from './compara-attributes/compara-attributes.component';



const routes: Routes = [
  {
    path: '',
    component: ComparaItemComponent
  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ComparaClinicasModule,
        ComparaItemComponent,
        ComparaAttributesComponent
    ],
    exports: [ComparaItemComponent],
})
export class ComparaItemModule {
    
}


 