import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterViewPageComponent } from './character-view-page.component';

describe('CharacterViewPageComponent', () => {
  let component: CharacterViewPageComponent;
  let fixture: ComponentFixture<CharacterViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CharacterViewPageComponent]
    });
    fixture = TestBed.createComponent(CharacterViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
