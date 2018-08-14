import { TestBed, inject } from '@angular/core/testing';

import { LoginChartService } from './login-chart.service';

describe('LoginChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginChartService]
    });
  });

  it('should be created', inject([LoginChartService], (service: LoginChartService) => {
    expect(service).toBeTruthy();
  }));
});
