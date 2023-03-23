import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AgePipe } from './pipes/age.pipe';
import { SSNPipe } from './pipes/ssn.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { FullTimeEmployeeComponent } from './full-time-employee/full-time-employee.component';
import { PartTimeEmployeeComponent } from './part-time-employee/part-time-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AgePipe,
    SSNPipe,
    PageNotFoundComponent,
    ContactUsComponent,
    HomeComponent,
    FullTimeEmployeeComponent,
    PartTimeEmployeeComponent,
    EditEmployeeComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
