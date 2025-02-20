import { NgModule } from '@angular/core';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ResultsComponent } from './pages/results/results.component';
import { DefaultComponent } from './pages/default/default.component';

@NgModule({
    imports: [SharedModule, InsuranceRoutingModule, ResultsComponent, DefaultComponent],
})
export class InsuranceModule {}
