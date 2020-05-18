import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrganizationService} from '../../../services/organization/organization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.css']
})
export class OrganizationCreateComponent implements OnInit {

  organizationForm: FormGroup;

  constructor(private fb: FormBuilder, private organizationService: OrganizationService, private router: Router) {
  }

  ngOnInit() {
    this.organizationForm = this.fb.group({
      name: ['', Validators.required],
      contactPerson: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      details: ['']
    });
  }

  saveOrganization() {
    this.organizationService.createOrganization(this.organizationForm.value).subscribe(
      data => {
        alert('Organizatia a fost creata si adaugata la baza de date!');
        this.router.navigate(['/organization-list']);
        return true;
      },
      error => {
        console.log('A aparut o eroare!');
        alert('A aparut o eroare');
      }
    );
  }

}
