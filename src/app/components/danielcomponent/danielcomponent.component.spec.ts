import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielcomponentComponent } from './danielcomponent.component';

describe('DanielcomponentComponent', () => {
  let component: DanielcomponentComponent;
  let fixture: ComponentFixture<DanielcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanielcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanielcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
