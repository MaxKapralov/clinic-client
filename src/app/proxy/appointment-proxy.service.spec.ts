import { TestBed } from '@angular/core/testing';

import { AppointmentProxyService } from './appointment-proxy.service';

describe('AppointmentProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentProxyService = TestBed.get(AppointmentProxyService);
    expect(service).toBeTruthy();
  });
});
