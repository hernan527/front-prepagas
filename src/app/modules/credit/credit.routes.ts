import { Routes } from '@angular/router';
import { CreditComponent } from './pages/default/default.component';
import { ResultsComponent } from './pages/results/results.component';

export const routes: Routes = [
    { path: '', component: CreditComponent },
    { path: 'results', component: ResultsComponent },
];