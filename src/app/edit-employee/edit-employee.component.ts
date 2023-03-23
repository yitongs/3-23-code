import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
  empId=0;
 constructor(private activatedRoute:ActivatedRoute){
  this.activatedRoute.params.subscribe((p)=>{
    this.empId = p["eid"]
  })
 }
}
