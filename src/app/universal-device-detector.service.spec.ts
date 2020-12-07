import { TestBed } from '@angular/core/testing';

import { UniversalDeviceDetectorService } from './universal-device-detector.service';

describe('UniversalDeviceDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversalDeviceDetectorService = TestBed.get(UniversalDeviceDetectorService);
    expect(service).toBeTruthy();
  });
});
