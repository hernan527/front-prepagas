import { Routes } from '@angular/router';
import { INTERNAL_PATHS } from '../../data/constants/routes';
import { HomeComponent } from './page/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];