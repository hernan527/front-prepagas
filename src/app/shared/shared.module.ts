import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as components from './components';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule} from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import {SliderModule} from 'primeng/slider';
import { DividerModule } from 'primeng/divider';
import { MaterialModule } from '../material/material.module';
import { SkeletonModule } from 'primeng/skeleton';

const commonModules = [
  HttpClientModule,
  FormsModule,
  CommonModule,
  MultiSelectModule,
  ChipModule,
  CardModule,
  RatingModule,
  NgSelectModule,
  ButtonModule,
  RippleModule,
  SplitButtonModule,
  ToggleButtonModule,
  PaginatorModule,
  SidebarModule,
  InputTextModule,
  PanelModule,
  TooltipModule,
  SliderModule,
  DividerModule,
  MaterialModule,
  SkeletonModule
]

@NgModule({
    imports: [CommonModule, RouterModule, ...commonModules, ...components.components],
    exports: [
        ...commonModules, ...components.components
    ]
})
export class SharedModule {}