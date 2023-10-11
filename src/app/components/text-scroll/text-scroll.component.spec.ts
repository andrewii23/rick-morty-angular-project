import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextScrollComponent } from './text-scroll.component';

describe('TextScrollComponent', () => {
  let component: TextScrollComponent;
  let fixture: ComponentFixture<TextScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextScrollComponent]
    });
    fixture = TestBed.createComponent(TextScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
