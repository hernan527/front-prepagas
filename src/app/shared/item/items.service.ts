import { Injectable } from '@angular/core';
import { ItemRestApiService } from './item-rest-api.service';
import { Item } from './item';
import { ItemAttribute } from './item-attribute';
import { Result } from './result';
import { ItemVsItem } from './item-vs-item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items : any[] = [];
  itemsSelected: Item[] = [];
  report: ItemVsItem[] = [];

  constructor(public restApi: ItemRestApiService) {}
  
    fetchMore(query:string, offset:number = 0, limit:number = 0) {
      return this.restApi.queryItems(query).subscribe((data: Result) => {
        this.items = [...this.items, ...data.results];
      });
    }

    addSelection(item: any) {
      this.itemsSelected.push({ ...item });
    }

    removeSelection(item: any) {
      const index = this.itemsSelected.findIndex((elem) => elem === item);
      if (index > -1) {
        this.itemsSelected.splice(index, 1);
      }
    }

    buildComparisonReport() {
      this.report.length = 0;

      // just in case the attributes are not ordered by id
      this.itemsSelected[0].attributes.sort((a, b) => a.id.localeCompare(b.id));
      this.itemsSelected[1].attributes.sort((a, b) => a.id.localeCompare(b.id));

      let ids0:string[] = this.itemsSelected[0].attributes.map(function(item) { return item.id; });
      let ids1:string[] = this.itemsSelected[1].attributes.map(function(item) { return item.id; });
      let uniqueAndMergedIds:string[] = this.arrayUnique(ids0.concat(ids1));

      uniqueAndMergedIds.forEach((id) => {
        this.report.push(this.createReportRow(id));
      });
    }

    createReportRow(id:string) : ItemVsItem {
      let index0:number = this.findItemAttrIndex(id, this.itemsSelected[0].attributes);
      let index1:number = this.findItemAttrIndex(id, this.itemsSelected[1].attributes);
      let row:ItemVsItem = {
        feature: index0 !== -1 ? this.itemsSelected[0].attributes[index0].name : this.itemsSelected[1].attributes[index1].name,
        item_1_value_name: index0 === -1 ? "- - - - -" : this.itemsSelected[0].attributes[index0].value_name,
        item_2_value_name: index1 === -1 ? "- - - - -" : this.itemsSelected[1].attributes[index1].value_name,
      };
      return row;
    }

    arrayUnique(array:any[]) {
      var a = array.concat();
      for(var i = 0; i < a.length; ++i) {
          for(var j = i + 1; j < a.length; ++j) {
              if(a[i] === a[j])
                  a.splice(j--, 1);
          }
      }
      return a;
    }

    findItemAttrIndex(id:string, arr:ItemAttribute[]): number {
      return arr.findIndex((item) => item.id === id);
    }

    setItems(items: any[]) {
      this.items = items;
    }

    searchClinicas(query:string, offset:number = 0, limit:number = 20) {
      return this.restApi.queryItems(query).subscribe((data: Result) => {
        this.items = [...this.items, ...data.results];
      });
    }
}