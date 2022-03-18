import { Component, OnInit } from '@angular/core';
import { EmployeeNamespace } from './employee.interface';
import { EmployeeService } from './employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public responseData!: EmployeeNamespace.EmployeeResponseModel;
  displayedColumns: string[] = ['NAME', 'ROLE', 'LOCATION', 'DAYS', 'ACTIONS'];
  dataSource!: MatTableDataSource<EmployeeNamespace.BodyResponseModel>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getEmployees(0, 10).subscribe({
      next: (response) => {
        console.log(response);
        this.responseData = response;
        this.dataSource = new MatTableDataSource(this.responseData.data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
      }
    });
  }

  delete(employeeUuid: string) {
    console.log(employeeUuid);
    this.employeeService.delete(employeeUuid).subscribe({
      next: (response) => {
        console.log('Deleted!');
        this.getAllEmployee();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
      }
    });
  }
}
