import { Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../data/constants/routes';
import { InsuranceComponent } from './pages/default/default.component';
import { ResultsComponent } from './pages/results/results.component';
export const routes: Routes = [
    { path: '', component: InsuranceComponent },
    { path: 'results', component: ResultsComponent },
];