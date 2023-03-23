import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent {
  
  firstNumber:number=10;
  lastNumber:number = 20;
  sum:number =0;

  employees=[

    {"id":1, "name":"smith", "salary":4500, "dob": new Date("07/21/1996"),"ssn":"012345678" },
    
    {"id":2, "name":"daniel", "salary":5300,"dob": new Date("03/21/1994"), "ssn":"012345672"},
    {"id":3, "name":"george", "salary":5000 ,"dob": new Date("11/22/1992"),"ssn":"012345641"},
    {"id":4, "name":"ryan", "salary":5700,"dob": new Date("12/12/1993"),"ssn":"012349362" }

  ]

  addNumbers(){
    this.sum = parseInt( this.firstNumber.toString()) + parseInt( this.lastNumber.toString())
 
  }

   isRedColor:boolean=true;
   show=true;
   toggleForm(){
  this.show = !this.show;
   }







}
