import { TestBed } from '@angular/core/testing';

import { AlbomsService } from './alboms.service';

describe('AlbomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbomsService = TestBed.get(AlbomsService);
    expect(service).toBeTruthy();
  });
});
