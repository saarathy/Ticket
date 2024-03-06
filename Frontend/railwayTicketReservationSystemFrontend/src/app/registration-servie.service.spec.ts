import { TestBed } from '@angular/core/testing';

import { RegistrationServieService } from './registration-servie.service';

describe('RegistrationServieService', () => {
  let service: RegistrationServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
