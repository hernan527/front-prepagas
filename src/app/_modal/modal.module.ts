import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';

@NgModule({
    imports: [CommonModule, ModalComponent],
    exports: [ModalComponent]
})
export class ModalModule { }