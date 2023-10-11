import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationService } from 'src/app/rick-morty/services/animation.service';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-text-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-scroll.component.html',
  styleUrls: ['./text-scroll.component.scss']
})
export class TextScrollComponent implements OnInit {
  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    this.animationService.animateTextScroll();
  }
}
