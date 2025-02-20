import { Component, Input } from '@angular/core';
import { Service } from './../../../../../data/interfaces';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss'],
    standalone: true,
    imports: [RouterLink],
})
export class ServiceComponent {
	@Input() service: Service = {
		description: '',
		id: '',
		image: '',
		title: '',
	};
}
