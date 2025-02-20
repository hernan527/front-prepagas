import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-compara-attributes',
    templateUrl: './compara-attributes.component.html',
    styleUrls: ['./compara-attributes.component.css'],
    standalone: true,
    imports: [NgFor]
})
export class ComparaAttributesComponent {
  @Input() productos: any[];

  get attributeGroups(): string[] {
    const groupsSet = new Set<string>();
    for (const producto of this.productos) {
      for (const attribute of producto.attributes) {
        groupsSet.add(attribute.attribute_group_name);
      }
    }
    return Array.from(groupsSet);
  }

  getAttributesInGroup(group: string): any[] {
    return this.productos[0].attributes.filter((attribute: { attribute_group_name: string; }) => attribute.attribute_group_name === group);
  }

  findAttributeValue(producto: any, attributeName: string): string {
    const attribute = producto.attributes.find((attr: { name: string; }) => attr.name === attributeName);
    return attribute ? attribute.value_name : '';
  }
}
