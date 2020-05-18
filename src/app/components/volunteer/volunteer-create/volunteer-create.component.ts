import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {VolunteerService} from '../../../services/volunteer/volunteer.service';

@Component({
  selector: 'app-volunteer-create',
  templateUrl: './volunteer-create.component.html',
  styleUrls: ['./volunteer-create.component.css']
})

export class VolunteerCreateComponent implements OnInit {

  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder, private volunteerService: VolunteerService, private router: Router) {
  }

  ngOnInit() {
    this.volunteerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  saveVolunteer() {
    this.volunteerService.createVolunteer(this.volunteerForm.value).subscribe(
      data => {
        alert('Voluntarul a fost creat si adaugat la baza de date!');
        this.router.navigate(['/volunteer-list']);
        return true;
      },
      error => {
        console.log('A aparut o eroare!');
        alert('A aparut o eroare');
      }
    );
  }

}
