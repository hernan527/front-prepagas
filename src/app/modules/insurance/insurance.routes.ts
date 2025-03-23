import { Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../data/constants/routes';
import { DefaultComponent } from './pages/default/default.component';
import { ResultsComponent } from './pages/results/results.component';
export const routes: Routes = [
    { path: ``, component: DefaultComponent },
    { path: INTERNAL_ROUTES.ASESORI_INSURANCE_RESULTS, component: ResultsComponent },
];