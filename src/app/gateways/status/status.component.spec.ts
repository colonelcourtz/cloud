import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaysStatusComponent } from './status.component';

describe('GatewaysStatusComponent', () => {
  let component: GatewaysStatusComponent;
  let fixture: ComponentFixture<GatewaysStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewaysStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaysStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
