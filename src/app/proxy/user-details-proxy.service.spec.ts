import { TestBed } from '@angular/core/testing';

import { UserDetailsProxyService } from './user-details-proxy.service';

describe('UserDetailsProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDetailsProxyService = TestBed.get(UserDetailsProxyService);
    expect(service).toBeTruthy();
  });
});
