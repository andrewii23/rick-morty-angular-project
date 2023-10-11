import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TextScrollComponent } from 'src/app/components/text-scroll/text-scroll.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationService } from '../../services/animation.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, TextScrollComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  constructor(private animationService: AnimationService) {}


  ngOnInit() {
    this.animationService.InitialAnimation();
    this.animationService.ScrollAnimation();
  }
}
