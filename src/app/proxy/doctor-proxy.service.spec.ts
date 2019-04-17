import { TestBed } from '@angular/core/testing';

import { DoctorProxyService } from './doctor-proxy.service';

describe('DoctorProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorProxyService = TestBed.get(DoctorProxyService);
    expect(service).toBeTruthy();
  });
});
