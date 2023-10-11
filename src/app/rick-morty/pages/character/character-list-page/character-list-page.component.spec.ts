import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListPageComponent } from './character-list-page.component';

describe('CharacterListPageComponent', () => {
  let component: CharacterListPageComponent;
  let fixture: ComponentFixture<CharacterListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CharacterListPageComponent]
    });
    fixture = TestBed.createComponent(CharacterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
