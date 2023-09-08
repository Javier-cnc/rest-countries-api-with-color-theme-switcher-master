import { TestBed } from '@angular/core/testing';

import { BackgroundAppService } from './background-app.service';

describe('BackgroundAppService', () => {
  let service: BackgroundAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
