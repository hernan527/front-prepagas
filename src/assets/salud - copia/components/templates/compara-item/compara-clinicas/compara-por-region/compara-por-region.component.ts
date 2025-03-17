import {ChangeDetectionStrategy,ViewEncapsulation, Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, RouterLinkActive, RouterLink } from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Clinicas } from 'src/app/data/interfaces/clinicas';
import { NgFor, NgIf, NgClass, AsyncPipe, KeyValuePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-compara-por-region',
    templateUrl: './compara-por-region.component.html',
    styleUrls: ['./compara-por-region.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatCardModule, MatListModule, NgFor, RouterLinkActive, RouterLink, NgIf, NgClass, AsyncPipe, KeyValuePipe]
})
export class ComparaPorRegionComponent implements OnInit {
  @Input() clinicasVal: any;

  readonly regiones: Observable<string[]>;
  readonly clinicas: Observable<Clinicas[]>
  

  constructor(
    ) { }

  ngOnInit(): void {

  }


}
