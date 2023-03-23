import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FullTimeEmployeeComponent } from './full-time-employee/full-time-employee.component';
import {HomeComponent} from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartTimeEmployeeComponent } from './part-time-employee/part-time-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
{path:"home", component:HomeComponent},
{path:"employee-list", component:EmployeeListComponent},
{path:"employee-edit/:eid", component:EditEmployeeComponent},
{path:"search-employee", component:SearchEmployeeComponent},
{path:"employee", children:[
  {path:"fulltime", component:FullTimeEmployeeComponent},
  {path:"parttime", component:PartTimeEmployeeComponent}
]},
{path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //eager loading
  exports: [RouterModule]
})
export class AppRoutingModule {  }
