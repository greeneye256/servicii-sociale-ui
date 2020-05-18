import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../services/employee/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  private employeeToEdit: any;

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  employeeForm: FormGroup;

  ngOnInit() {

    this.getEmployee();
    console.log(this.employeeToEdit);
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  getEmployee() {
    this.employeeToEdit = this.employeeService.getEmployee(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.employeeToEdit = data;
        this.setFormValues();
      },
      err => console.error(err),
      () => {
      }
    );
  }

  setFormValues() {
    this.employeeForm.patchValue({
      id: this.employeeToEdit.id,
      firstName: this.employeeToEdit.firstName,
      lastName: this.employeeToEdit.lastName,
      phoneNumber: this.employeeToEdit.phoneNumber,
      email: this.employeeToEdit.email
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeForm.value).subscribe(
      data => {
        this.employeeForm.reset();
        alert('Angajatul a fost modificat!');
        this.router.navigate(['/employee-list']);
      },
      error => {
        console.log('something went wrong!');
      },
      () => {
      }
    );
  }

}
