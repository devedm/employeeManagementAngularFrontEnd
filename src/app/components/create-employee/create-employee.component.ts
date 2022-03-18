import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public createEmployeeFormGroup: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    fullName: new FormControl(""),
    vacationDays: new FormControl(""),
    userType: new FormControl("")
  });

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    const formValues = this.createEmployeeFormGroup.value;
    const employee = {
      email: formValues.email,
      password: formValues.password,
      fullName: formValues.fullName,
      vacationDays: formValues.vacationDays,
      userType: formValues.userType
    };
    this.employeeService.create(employee).subscribe({
      next: (response) => {
        // respuesta success
        console.log(response);
        this.router.navigate(['/employee']);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // finally
      }
    });
  }

}
