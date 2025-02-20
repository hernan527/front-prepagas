import { Component, Input } from '@angular/core';
import { Credit } from './../../../../../data/interfaces';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    standalone: true,
    imports: [RouterLink, CurrencyPipe],
})
export class ResultComponent {
	@Input() credit!: Credit;
}
