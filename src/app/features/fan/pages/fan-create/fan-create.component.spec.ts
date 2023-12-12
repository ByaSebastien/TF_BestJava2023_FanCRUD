import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanCreateComponent } from './fan-create.component';

describe('FanCreateComponent', () => {
  let component: FanCreateComponent;
  let fixture: ComponentFixture<FanCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FanCreateComponent]
    });
    fixture = TestBed.createComponent(FanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
