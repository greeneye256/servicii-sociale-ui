import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SocialCaseService} from '../../../services/social-case/social-case.service';
import {Router} from '@angular/router';
import {EmployeeService} from '../../../services/employee/employee.service';

@Component({
  selector: 'app-social-case-create',
  templateUrl: './social-case-create.component.html',
  styleUrls: ['./social-case-create.component.css']
})
export class SocialCaseCreateComponent implements OnInit {

  socialCaseForm: FormGroup;
  employees: any = [];

  constructor(
    private fb: FormBuilder,
    private socialCaseService: SocialCaseService,
    private router: Router,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.getEmployees();
    this.socialCaseForm = this.fb.group({
      dateOfTakingOverCase: [''],
      notifyingPerson: ['', Validators.required],
      notifyingPersonPhoneNumber: ['', Validators.required],
      employee: ['', Validators.required],
      beneficiary: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        cnp: ['', Validators.required],
        age: ['', Validators.required],
        birthDate: [''],
        neighborhood: [''],
        street: [''],
        addressDetails: [''],
        phoneNumber: [''],
        income: [''],
        livingConditions: [''],
        risks: [''],
        health: [''],
        autonomy: [''],
        alimentationNeeds: [''],
        medicationNeeds: [''],
        counselingNeeds: [''],
        needsDetails: [''],
        potentialSupportPersons: [''],
        potentialSupportPersonsDetails: [''],
        shoppingSupport: [''],
        utilityPaymentSupport: [''],
        counselingSupport: [''],
        supportDetails: [''],
        levelOfUrgency: [''],
        // relatives: this.fb.array([{
        //   firstName: ['', Validators.required],
        //   lastName: ['', Validators.required],
        //   age: [''],
        //   familyBounding: ['', Validators.required]
        // }])
        relatives: this.fb.array([this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          age: [''],
          familyBonding: ['', Validators.required]
        })])
      })
    });
    // console.log(this.todayDate);
    this.socialCaseForm.patchValue(
      {
        dateOfTakingOverCase: this.formatDate(new Date())
      }
    );
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }

  saveSocialCase() {
    this.socialCaseService.createSocialCase(this.socialCaseForm.value).subscribe(
      data => {
        alert('Cazul social a fost adaugat la baza de date!');
        this.router.navigate(['/socialCase-list']);
        return true;
      },
      error => {
        console.log('A aparut o eroare!');
        alert('A aparut o eroare');
      }
    );
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
        data => {
          this.employees = data;
        },
        err => console.error(err),
        () => console.log('employees loaded')
      )
    ;
  }

  get relatives() {
    return this.socialCaseForm.get('beneficiary').get('relatives') as FormArray;
  }

  addRelative() {
    this.relatives.push(this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [''],
      familyBonding: ['', Validators.required]
    }));
  }

  deleteRelative(i: number) {
    this.relatives.removeAt(i);
  }
}
