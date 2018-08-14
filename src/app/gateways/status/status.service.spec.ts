import { TestBed, inject } from '@angular/core/testing';

import { GatewayStatusService } from './gateway-status.service';

describe('GatewayStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GatewayStatusService]
    });
  });

  it('should be created', inject([GatewayStatusService], (service: GatewayStatusService) => {
    expect(service).toBeTruthy();
  }));
});
