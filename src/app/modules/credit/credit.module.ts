import { NgModule } from '@angular/core';

import { CreditRoutingModule } from './credit-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ResultsComponent } from './pages/results/results.component';
import { DefaultComponent } from './pages/default/default.component';
import { components } from './components';

@NgModule({
    imports: [SharedModule, CreditRoutingModule, ResultsComponent, DefaultComponent, ...components],
})
export class CreditModule {}
