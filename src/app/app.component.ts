import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
// import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})


export class AppComponent implements OnInit, OnDestroy {
  title: any;
  constructor(
    // private config: PrimeNGConfig
    ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  phone = "5491125608600"
  mensaje = "Hola Hernán, necesito más info de los planes, gracias";

  
  ngOnInit() {
      // this.config.setTranslation({
      //     accept: 'Accept',
      //     reject: 'Cancel',
          // translations
      // });
  }
  
}

