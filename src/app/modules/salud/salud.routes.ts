import { Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../data/constants/routes';
import { SaludComponent } from './pages/default/default.component';
import { ResultsComponent } from './pages/results/results.component';
import { DetailsComponent } from './pages/details/details.component';
import { CompareComponent } from './pages/compare/compare.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';

export const routes: Routes = [
    { path: '', component: SaludComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'results/details', component: DetailsComponent },
    { path: 'results/compare', component: CompareComponent },
    { path: 'results/empresa', component: EmpresasComponent },
];