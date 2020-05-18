import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private employees;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      data => {
        this.employees = data;
      },
      error => console.error(error),
      () => console.log('employees loaded')
    );
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployeeById(id).subscribe(
      data => alert('Voluntarul a fost sters.'),
      error => console.log('something went wrong'),
      () => this.getEmployees());
  }

}
