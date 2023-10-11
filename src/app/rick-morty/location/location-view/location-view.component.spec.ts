import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationViewComponent } from './location-view.component';

describe('LocationViewComponent', () => {
  let component: LocationViewComponent;
  let fixture: ComponentFixture<LocationViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocationViewComponent]
    });
    fixture = TestBed.createComponent(LocationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
