import { EMPTY_STRING } from './data/constants/routes';
import { Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { provideClientHydration } from '@angular/platform-browser';

export const routes: Routes = [
  {
    path: EMPTY_STRING,
    component: SkeletonComponent,
    children: [
              // Redirección por defecto a Salud
      { path: ``,
        redirectTo: `/home`,
        pathMatch: 'full' },
        {
          path: `home`,
          loadChildren: () =>
            import('./modules/home/home.routes').then( m => m.routes ),
          title: 'App Home'
        },
      {
        path: `credit`,
        loadChildren: () =>
          import('./modules/credit/credit.routes').then( m => m.routes ),
        title: 'App Credit'
      },
      {
        path: `insurance`,
        loadChildren: () =>
          import('./modules/insurance/insurance.routes').then( m => m.routes ),
        title: 'App Seguros'
      },
      {
        path: `salud`,
        loadChildren: () =>
          import('./modules/salud/salud.routes').then( m => m.routes ),
        title: 'App Salud'
      },
      {
        path: `auth`,
        loadChildren: () =>
          import('./modules/auth/auth.routes').then( m => m.routes ),
        title: 'App Login'
      }
    ],
  },
  // Ruta comodín
  { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
];