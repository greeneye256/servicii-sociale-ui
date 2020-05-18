import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../../services/organization/organization.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  private organizations;

  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
    this.getOrganizations();
  }

  getOrganizations() {
    this.organizationService.getOrganizations().subscribe(
      data => {
        this.organizations = data;
      },
      error => console.error(error),
      () => console.log('organizations loaded')
    );
  }

  deleteOrganization(id: string) {
    this.organizationService.deleteOrganizationById(id).subscribe(
      data => alert('Organizatia a fost stearsa.'),
      error => console.log('something went wrong'),
      () => this.getOrganizations());
  }

}
