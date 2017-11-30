import { TestBed, inject } from '@angular/core/testing';

import { ConvoysService } from './convoys.service';

describe('ConvoysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvoysService]
    });
  });

  it('should be created', inject([ConvoysService], (service: ConvoysService) => {
    expect(service).toBeTruthy();
  }));
});
