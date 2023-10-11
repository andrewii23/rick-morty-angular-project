import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeViewPageComponent } from './episode-view-page.component';

describe('EpisodeViewPageComponent', () => {
  let component: EpisodeViewPageComponent;
  let fixture: ComponentFixture<EpisodeViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EpisodeViewPageComponent]
    });
    fixture = TestBed.createComponent(EpisodeViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
