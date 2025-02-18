import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {environment} from '../environments/environment';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {CommonModule} from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
// import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SaludModule } from './modules/salud/salud.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PageLoaderComponent,
    SkeletonComponent,
    FooterComponent,
    HeaderComponent
                // LoadingButtonComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MarkdownModule,
    ButtonModule,
    TooltipModule,
    SaludModule,
    MaterialModule
  ],
  providers: [{
    provide: {
      STEPPER_GLOBAL_OPTIONS
    },
    
    useValue: {
      baseUrl: 'https://jsonplaceholder.typicode.com',
      displayDefaultIndicatorType: false
    },
  }],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

