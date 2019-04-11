import { TestBed } from '@angular/core/testing';

import { StylesChangerService } from './styles-changer.service';

describe('StylesChangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StylesChangerService = TestBed.get(StylesChangerService);
    expect(service).toBeTruthy();
  });
});
