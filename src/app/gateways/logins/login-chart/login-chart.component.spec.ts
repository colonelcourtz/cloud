import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginChartComponent } from './login-chart.component';

describe('LoginChartComponent', () => {
  let component: LoginChartComponent;
  let fixture: ComponentFixture<LoginChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
