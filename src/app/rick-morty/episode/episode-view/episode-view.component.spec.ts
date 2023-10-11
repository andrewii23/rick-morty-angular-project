import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeViewComponent } from './episode-view.component';

describe('EpisodeViewComponent', () => {
  let component: EpisodeViewComponent;
  let fixture: ComponentFixture<EpisodeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EpisodeViewComponent]
    });
    fixture = TestBed.createComponent(EpisodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
