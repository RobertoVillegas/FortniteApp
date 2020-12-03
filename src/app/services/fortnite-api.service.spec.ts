import { TestBed } from '@angular/core/testing';

import { FortniteApiService } from './fortnite-api.service';

describe('FortniteApiService', () => {
  let service: FortniteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortniteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
