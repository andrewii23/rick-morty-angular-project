import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationViewPageComponent } from './location-view-page.component';

describe('LocationViewPageComponent', () => {
  let component: LocationViewPageComponent;
  let fixture: ComponentFixture<LocationViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocationViewPageComponent]
    });
    fixture = TestBed.createComponent(LocationViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
