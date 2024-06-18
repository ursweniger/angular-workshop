import { TestBed } from '@angular/core/testing';

import { CampusEventDataService } from './campus-event-data.service';

describe('CampusEventDataService', () => {
  let service: CampusEventDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampusEventDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
