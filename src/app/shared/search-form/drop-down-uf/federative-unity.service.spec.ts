import { TestBed } from '@angular/core/testing';

import { FederativeUnityService } from './federative-unity.service';

describe('FederativeUnityService', () => {
  let service: FederativeUnityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FederativeUnityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
