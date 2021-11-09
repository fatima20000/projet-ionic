import { TestBed } from '@angular/core/testing';

import { ReunionsService } from './reunion.service';

describe('ReunionService', () => {
  let service: ReunionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReunionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
