import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanDetailsComponent } from './fan-details.component';

describe('FanDetailsComponent', () => {
  let component: FanDetailsComponent;
  let fixture: ComponentFixture<FanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FanDetailsComponent]
    });
    fixture = TestBed.createComponent(FanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
