import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanUpdateComponent } from './fan-update.component';

describe('FanUpdateComponent', () => {
  let component: FanUpdateComponent;
  let fixture: ComponentFixture<FanUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FanUpdateComponent]
    });
    fixture = TestBed.createComponent(FanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
