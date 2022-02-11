import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatTableModule} from '@angular/material/table';
import {MatTable} from '@angular/material/table';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

import { EmployeeService } from './shared/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'employees', component: EmployeesComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'login', component:LoginComponent}
  ];

@NgModule({  
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesComponent,
    EmployeeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,

    MatTableModule,
    ReactiveFormsModule,
    MatGridListModule,

    MatButtonModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  exports: [ RouterModule,MatGridListModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
