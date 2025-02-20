import { Routes } from '@angular/router';
import { INTERNAL_PATHS } from '../../data/constants/routes';

import { DefaultComponent } from './pages/default/default.component';
import { ResultsComponent } from './pages/results/results.component';

export const routes: Routes = [
    { path: ``, component: DefaultComponent },
    { path: INTERNAL_PATHS.ASESORI_CREDIT_RESULTS, component: ResultsComponent },
];