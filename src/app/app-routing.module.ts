import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'employee',
    component: EmployeesComponent,
  },
  {
    path: 'create-employee',
    component: CreateEmployeeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
