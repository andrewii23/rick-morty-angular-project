import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('hamburger', { static: true }) hamburger!: ElementRef;
  private tl: any;
  private routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!this.tl.reversed()) {
          this.tl.reverse();
          this.hamburger.nativeElement.classList.remove('is-active');
        }
      }
    });
  }

  ngOnInit() {
    this.tl = gsap.timeline({ paused: true });

    this.tl.to('.nav-container', { duration: 1, top: 0, ease: 'expo.inOut' });

    this.tl.from('.menu > div', {
      duration: 0.8,
      y: 100,
      opacity: 0,
      ease: 'expo.out',
      stagger: 0.1,
      delay: -0.4,
    });

    this.tl.reverse();
  }

  ngAfterViewInit() {
    this.hamburger.nativeElement.addEventListener('click', () => {
      this.hamburger.nativeElement.classList.toggle('is-active');
      this.tl.reversed(!this.tl.reversed());
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
