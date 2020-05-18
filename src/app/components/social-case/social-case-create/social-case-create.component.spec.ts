import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCaseCreateComponent } from './social-case-create.component';

describe('SocialCaseCreateComponent', () => {
  let component: SocialCaseCreateComponent;
  let fixture: ComponentFixture<SocialCaseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialCaseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
