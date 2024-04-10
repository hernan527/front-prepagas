import {ChangeDetectionStrategy,ViewEncapsulation, Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Clinicas } from 'src/app/data/interfaces/clinicas';

@Component({
  selector: 'app-compara-por-region',
  templateUrl: './compara-por-region.component.html',
  styleUrls: ['./compara-por-region.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
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
