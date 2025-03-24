import { EMPTY_STRING } from './data/constants/routes';
import { Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/home/page/home.component';
import { CreditComponent } from './modules/credit/pages/default/default.component';
import { InsuranceComponent } from './modules/insurance/pages/default/default.component';
import { SaludComponent } from './modules/salud/pages/default/default.component';
import { SigninComponent } from './modules/auth/pages/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      // Redirección por defecto a 'asesori'
      { path: '', redirectTo: 'asesori', pathMatch: 'full' },
      {
        path: 'asesori',
        component: HomeComponent,
        title: 'App Home'
      },
      {
        path: 'credit',
        component: CreditComponent,
        title: 'App Credit'
      },
      {
        path: 'insurance',
        component: InsuranceComponent,
        title: 'App Seguros'
      },
      {
        path: 'salud',
        component: SaludComponent,
        title: 'App Salud'
      },
      {
        path: 'auth',
        component: SigninComponent,
        title: 'App Login'
      }
    ],
  },
  // Ruta comodín
  { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
];
