import { Component, OnInit} from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { PageLoaderService } from '../services/page-loader.service';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-page-loader',
    templateUrl: './page-loader.component.html',
    styleUrls: ['./page-loader.component.css'],
    standalone: true,
    imports: [NgIf]
})
export class PageLoaderComponent implements OnInit {

  constructor(
    private pageLoaderService: PageLoaderService
    ) { }
  loading: boolean;
  message: string;
  progressValue: number;
  progressValueStyle: string;
  private _subscribed: boolean = true;
  ngOnInit(): void {
  this.subscribe();
  }private subscribe() {
  this.pageLoaderService.state
    .pipe(takeWhile(() => this._subscribed))
    .subscribe(loading => {
   this.loading = loading;
    });this.pageLoaderService.message
    .pipe(takeWhile(() => this._subscribed))
    .subscribe(message => {
   if (!!message) {
     this.message = message;
   }
    });this.pageLoaderService.progressValue
    .pipe(takeWhile(() => this._subscribed))
    .subscribe((progressValue: number) => {
   if (!!progressValue) {
     this.progressValue = progressValue;
     this.progressValueStyle = `${progressValue}%`;
   }
    });
  }
   ngOnDestroy() {
    this._subscribed = false;
  }

}