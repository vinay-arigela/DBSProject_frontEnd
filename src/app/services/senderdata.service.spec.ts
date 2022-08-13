import { TestBed } from '@angular/core/testing';

import { SenderdataService } from './senderdata.service';

describe('SenderdataService', () => {
  let service: SenderdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
