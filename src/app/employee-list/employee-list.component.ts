import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
 employees=[
  {id:1, name:"Daniel", age:30},
  {id:2, name:"Peter", age:30},
  {id:3, name:"Mia", age:30},
  {id:4, name:"Sarah", age:30}

]
}
