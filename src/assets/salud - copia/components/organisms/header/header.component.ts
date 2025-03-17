import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
        imports: [MatCardModule], // <--- Add MatButtonModule here
    
})
export class HeaderComponent {}