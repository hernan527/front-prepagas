import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
})


export class AppComponent implements OnInit, OnDestroy {
  title: any;
  constructor(
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

