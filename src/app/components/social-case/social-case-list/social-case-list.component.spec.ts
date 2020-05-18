import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCaseListComponent } from './social-case-list.component';

describe('SocialCaseListComponent', () => {
  let component: SocialCaseListComponent;
  let fixture: ComponentFixture<SocialCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
