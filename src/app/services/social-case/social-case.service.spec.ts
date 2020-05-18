import { TestBed } from '@angular/core/testing';

import { SocialCaseService } from './social-case.service';

describe('SocialCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialCaseService = TestBed.get(SocialCaseService);
    expect(service).toBeTruthy();
  });
});
