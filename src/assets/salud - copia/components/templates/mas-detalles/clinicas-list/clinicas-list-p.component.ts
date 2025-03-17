import { Component, Inject, OnInit, VERSION } from '@angular/core';



interface USERS {
    id: Number;
    name: String;
    username: String;
    email: String;
}


@Component({
    selector: 'app-clinicas-list-p',
    // templateUrl: './clinicas-list-p.component.html',
    template: '',
    styleUrls: ['./clinicas-list.component.css'],
    standalone: true
})
export class ClinicasListPrimengComponent implements OnInit {



  constructor(
   ) {
}





  ngOnInit(): void {
 
  }

}

