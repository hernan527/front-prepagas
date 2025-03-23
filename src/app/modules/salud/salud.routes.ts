import { Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../data/constants/routes';
import { DefaultComponent } from './pages/default/default.component';
import { ResultsComponent } from './pages/results/results.component';
import { DetailsComponent } from './pages/details/details.component';
import { CompareComponent } from './pages/compare/compare.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';

export const routes: Routes = [
    { path: ``, component: DefaultComponent },
    { path: INTERNAL_ROUTES.ASESORI_SALUD_RESULTS, component: ResultsComponent },
    { path: INTERNAL_ROUTES.ASESORI_SALUD_DETAILS, component: DetailsComponent },
    { path: INTERNAL_ROUTES.ASESORI_SALUD_COMPARE, component: CompareComponent },
    { path: INTERNAL_ROUTES.ASESORI_SALUD_EMPRESA, component: EmpresasComponent },
];