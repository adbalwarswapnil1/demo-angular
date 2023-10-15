import { TestBed } from '@angular/core/testing';

import { JwtUnAuthorisedInterceptorService } from './jwt-un-authorised-interceptor.service';

describe('JwtUnAuthorisedInterceptorService', () => {
  let service: JwtUnAuthorisedInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtUnAuthorisedInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
