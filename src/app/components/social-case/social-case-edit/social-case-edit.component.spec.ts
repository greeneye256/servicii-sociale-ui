import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCaseEditComponent } from './social-case-edit.component';

describe('SocialCaseEditComponent', () => {
  let component: SocialCaseEditComponent;
  let fixture: ComponentFixture<SocialCaseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialCaseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
