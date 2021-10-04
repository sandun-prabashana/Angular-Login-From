import { TestBed } from '@angular/core/testing';

import { LogInServiceService } from './login.service';

describe('LoginService', () => {
  let service: LogInServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
