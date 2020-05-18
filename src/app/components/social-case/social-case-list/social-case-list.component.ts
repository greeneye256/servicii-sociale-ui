import { Component, OnInit } from '@angular/core';
import {SocialCaseService} from '../../../services/social-case/social-case.service';

@Component({
  selector: 'app-social-case-list',
  templateUrl: './social-case-list.component.html',
  styleUrls: ['./social-case-list.component.css']
})
export class SocialCaseListComponent implements OnInit {

  private socialCases;

  constructor(private socialCaseService: SocialCaseService) {
  }

  ngOnInit() {
    this.getSocialCases();
  }

  getSocialCases() {
    this.socialCaseService.getSocialCases().subscribe(
      data => {
        this.socialCases = data;
      },
      error => console.error(error),
      () => console.log('social cases loaded')
    );
  }

}
