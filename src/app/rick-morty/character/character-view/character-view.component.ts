import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models';
import { gsap } from 'gsap';

@Component({
  selector: 'app-character-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss'],
})
export class CharacterViewComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.animateDataListItems();
  }

  animateDataListItems(): void {
    gsap.from('.ct-view', {
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.1,
    });
    gsap.from('.ct-data', {
      delay: 0.25,
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.1,
    });
    gsap.from('.ct-view-data', {
      delay: 0.5,
      duration: 0.7,
      opacity: 0,
      y: -10,
      stagger: 0.1,
    });
  }
  @Input({ required: true }) data!: Character;
}
