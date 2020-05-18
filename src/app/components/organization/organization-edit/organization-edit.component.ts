import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../../services/organization/organization.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css']
})
export class OrganizationEditComponent implements OnInit {

  private organizationToEdit: any;

  constructor(private organizationService: OrganizationService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  organizationForm: FormGroup;

  ngOnInit() {

    this.getOrganization();
    console.log(this.organizationToEdit);
    this.organizationForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      contactPerson: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required)
    });
  }

  getOrganization() {
    this.organizationToEdit = this.organizationService.getOrganization(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.organizationToEdit = data;
        this.setFormValues();
      },
      err => console.error(err),
      () => {
      }
    );
  }

  setFormValues() {
    this.organizationForm.patchValue({
      id: this.organizationToEdit.id,
      name: this.organizationToEdit.name,
      contactPerson: this.organizationToEdit.contactPerson,
      phoneNumber: this.organizationToEdit.phoneNumber,
      email: this.organizationToEdit.email,
      details: this.organizationToEdit.details
    });
  }

  updateOrganization() {
    this.organizationService.updateOrganization(this.organizationForm.value).subscribe(
      data => {
        this.organizationForm.reset();
        alert('Detaliile organizatiei au fost modificate!');
        this.router.navigate(['/organization-list']);
      },
      error => {
        console.log('something went wrong!');
      },
      () => {
      }
    );
  }

}
