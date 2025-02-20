import { EMPTY_STRING, INTERNAL_PATHS } from './data/constants/routes';
import { Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

export const routes: Routes = [
  {
    path: EMPTY_STRING,
    component: SkeletonComponent,
    children: [
              // Redirección por defecto a Salud
      { path: EMPTY_STRING,
        redirectTo: INTERNAL_PATHS.ASESORI_SALUD_DEFAULT,
        pathMatch: 'full' },
      {
        path: INTERNAL_PATHS.ASESORI_DEFAULT,
        loadChildren: () =>
          import('./modules/home/home.routes').then( m => m.routes),
        title: 'App Home'
      },
      {
        path: INTERNAL_PATHS.ASESORI_CREDIT_DEFAULT,
        loadChildren: () =>
          import('./modules/credit/credit.routes').then( m => m.routes ),
        title: 'App Credit'
      },
      {
        path: INTERNAL_PATHS.ASESORI_INSURANCE_DEFAULT,
        loadChildren: () =>
          import('./modules/insurance/insurance.routes').then( m => m.routes ),
        title: 'App Seguros'
      },
      {
        path: INTERNAL_PATHS.ASESORI_SALUD_DEFAULT,
        loadChildren: () =>
          import('./modules/salud/salud.routes').then( m => m.routes ),
        title: 'App Salud'
      },
      {
        path: INTERNAL_PATHS.AUTH_DEFAULT,
        loadChildren: () =>
          import('./modules/auth/auth.routes').then( m => m.routes ),
        title: 'App Login'
      }
    ],
  },
  // Ruta comodín
  { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
];