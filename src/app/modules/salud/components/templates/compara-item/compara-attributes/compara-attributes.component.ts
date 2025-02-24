import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-compara-attributes',
    templateUrl: './compara-attributes.component.html',
    styleUrls: ['./compara-attributes.component.css'],
    standalone: true,
    imports: [NgFor]
})
export class ComparaAttributesComponent implements OnInit {
  @Input() productos: any[];

  ngOnInit(): void {
    // console.log('compara-attributes 15 this.productos  :');
    // console.log(this.productos);
  }
  get attributeGroups(): string[] {
    // console.log('compara attributes 15 get attributeGroups')
    // console.log('compara attributes 15 get attributeGroups')

    const groupsSet = new Set<string>();
    for (const producto of this.productos) {
      // console.log('compara attributes 17 compara-attributes 17 for (const attribute of producto.attributes)')
     // console.log('compara attributes 18 this.productos  :')
      if(this.productos){// console.log(this.productos)
        }
      // console.log('compara attributes 20 producto  :')
      if(producto){// console.log(producto)
        }
      for (const attribute of producto.attributes) {
        groupsSet.add(attribute.attribute_group_name);
      }
    }
    return Array.from(groupsSet);
  }

  getAttributesInGroup(group: string): any[] {
    // console.log('compara-attributes 26 return this.productos[0].attributes.filter((attribute: { attribute_group_name: string; }) => attribute.attribute_group_name === group);')
    // console.log('compara attributes 31 group:')
    if(group){// console.log(group)
      }
    return this.productos[0].attributes.filter((attribute: { attribute_group_name: string; }) => attribute.attribute_group_name === group);
  }

  findAttributeValue(producto: any, attributeName: string): string {
    const attribute = producto.attributes.find((attr: { name: string; }) => attr.name === attributeName);
    // console.log('compara-attributes 38 return attribute ? attribute.value_name : ')
    // console.log('compara attributes 39 producto:')
    if(producto){// console.log(producto)
      }
    // console.log('compara attributes 41 attributeName:')
    if(attributeName){// console.log(attributeName)
      }
    // console.log('compara attributes 43 attribute.value_name:')
    if(attribute.value_name){// console.log(attribute.value_name)
      }
    return attribute ? attribute.value_name : '';
  }
}
