import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../../services/employee/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(
      data => {
        alert('Angajatul a fost adaugat la baza de date!');
        this.router.navigate(['/employee-list']);
        return true;
      },
      error => {
        console.log('A aparut o eroare!');
        alert('A aparut o eroare');
      }
    );
  }

}
