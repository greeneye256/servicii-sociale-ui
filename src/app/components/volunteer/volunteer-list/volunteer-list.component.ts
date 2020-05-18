import { Component, OnInit } from '@angular/core';
import {VolunteerService} from '../../../services/volunteer/volunteer.service';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})
export class VolunteerListComponent implements OnInit {

  private volunteers;

  constructor(private volunteerService: VolunteerService) {
  }

  ngOnInit() {
    this.getVolunteers();
  }

  getVolunteers() {
    this.volunteerService.getVolunteers().subscribe(
      data => {
        this.volunteers = data;
      },
      error => console.error(error),
      () => console.log('volunteers loaded')
    );
  }

  deleteVolunteer(id: string) {
    this.volunteerService.deleteVolunteerById(id).subscribe(
      data => alert('Voluntarul a fost sters.'),
      error => console.log('something went wrong'),
      () => this.getVolunteers());
  }

}
