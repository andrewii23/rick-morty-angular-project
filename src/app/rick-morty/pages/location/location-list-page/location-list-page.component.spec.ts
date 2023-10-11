import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationListPageComponent } from './location-list-page.component';

describe('LocationListPageComponent', () => {
  let component: LocationListPageComponent;
  let fixture: ComponentFixture<LocationListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocationListPageComponent]
    });
    fixture = TestBed.createComponent(LocationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
