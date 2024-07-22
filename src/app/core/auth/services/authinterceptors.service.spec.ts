import { TestBed } from '@angular/core/testing';

import { AuthinterceptorsService } from './authinterceptors.service';

describe('AuthinterceptorsService', () => {
  let service: AuthinterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthinterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
