import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from '../../data/constants/routes';
import { DefaultComponent } from './pages/default/default.component';
import { ResultsComponent } from './pages/results/results.component';
import { DetailsComponent } from './pages/details/details.component';
import { CompareComponent } from './pages/compare/compare.component';
import { FormQueplanComponent } from './components/atoms/form-queplan/form-queplan.component';


const routes: Routes = [
	{ path: ``, component: DefaultComponent },
	{ path: INTERNAL_PATHS.ASESORI_SALUD_FORM, component: FormQueplanComponent,    
		data: { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' } },
	{ path: INTERNAL_PATHS.ASESORI_SALUD_RESULTS, component: ResultsComponent },
	{ path: INTERNAL_PATHS.ASESORI_SALUD_DETAILS, component: DetailsComponent },
	{ path: INTERNAL_PATHS.ASESORI_SALUD_COMPARE, component: CompareComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SaludRoutingModule {}
