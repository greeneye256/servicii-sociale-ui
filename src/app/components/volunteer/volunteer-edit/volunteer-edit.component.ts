import { Component, OnInit } from '@angular/core';
import {VolunteerService} from '../../../services/volunteer/volunteer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-volunteer-edit',
  templateUrl: './volunteer-edit.component.html',
  styleUrls: ['./volunteer-edit.component.css']
})
export class VolunteerEditComponent implements OnInit {

  private volunteerToEdit: any;

  constructor(private volunteerService: VolunteerService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  volunteerForm: FormGroup;

  ngOnInit() {

    this.getVolunteer();
    console.log(this.volunteerToEdit);
    this.volunteerForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  getVolunteer() {
    this.volunteerToEdit = this.volunteerService.getVolunteer(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.volunteerToEdit = data;
        this.setFormValues();
      },
      err => console.error(err),
      () => {
      }
    );
  }

  setFormValues() {
    this.volunteerForm.patchValue({
      id: this.volunteerToEdit.id,
      firstName: this.volunteerToEdit.firstName,
      lastName: this.volunteerToEdit.lastName,
      phoneNumber: this.volunteerToEdit.phoneNumber,
      email: this.volunteerToEdit.email
    });
  }

  updateVolunteer() {
    this.volunteerService.updateVolunteer(this.volunteerForm.value).subscribe(
      data => {
        this.volunteerForm.reset();
        alert('Voluntarul a fost modificat!');
        this.router.navigate(['/volunteer-list']);
      },
      error => {
        console.log('something went wrong!');
      },
      () => {
      }
    );
  }

}
