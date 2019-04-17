import { TestBed } from '@angular/core/testing';

import { ServiceProxyService } from './service-proxy.service';

describe('ServiceProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProxyService = TestBed.get(ServiceProxyService);
    expect(service).toBeTruthy();
  });
});
