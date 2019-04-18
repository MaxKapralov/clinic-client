import { TestBed } from '@angular/core/testing';

import { CustomEncoderServiceService } from './custom-encoder-service.service';

describe('CustomEncoderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomEncoderServiceService = TestBed.get(CustomEncoderServiceService);
    expect(service).toBeTruthy();
  });
});
