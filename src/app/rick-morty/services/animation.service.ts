import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  animateTextScroll() {
    const firstText = document.querySelector('.firstText');
    const secondText = document.querySelector('.secondText');
    const slider = document.querySelector('.slider');
    let direction = -1;
    let xPercent = 0;

    gsap.to(slider, {
      scrollTrigger: {
        trigger: '#my-trigger',
        scrub: 0.5,
        start: 'top center',
        end: 'bottom center',
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-300px',
    });

    function animate() {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText, { xPercent: xPercent });
      gsap.set(secondText, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }

    animate();
  }

  InitialAnimation() {
    gsap.from(document.querySelectorAll('.content-list'), {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: 80,
      ease: 'slow(0.7, 0.7, false)',
    });
    gsap.from(document.querySelectorAll('.hero-content-line>span>h1'), {
      duration: 1,
      delay: 0.25,
      y: 200,
      stagger: 0.125,
      ease: 'power2.out',
    });

    gsap.from(document.querySelector('.angular-logo'), {
      duration: 1,
      delay: 0.5,
      scale: 0,
      opacity: 0,
      ease: 'slow(0.7, 0.7, false)',
    });

    gsap.from(document.querySelector('.video'), {
      y: 80,
      duration: 1,
      delay: 0.75,
      opacity: 0,
      ease: 'slow(0.7, 0.7, false)',
    });
    gsap.from(document.querySelector('app-nav'), {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
    });
    gsap.from(document.querySelector('app-spinner'), {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
    });

  }

  ScrollAnimation() {
    gsap.from(document.querySelectorAll('.feature-title>span>h1'), {
      scrollTrigger: {
        trigger: document.querySelectorAll('.two-side'),
        start: '100px',
      },
      duration: 1,
      y: 180,
      stagger: 0.15,
      ease: 'power2.out',
    });


    gsap.from(document.querySelectorAll('.feature-card'), {
      scrollTrigger: {
        trigger: document.querySelectorAll('.feature-card'),
        start: '-75%',
        end: 'center',
      },
      y: 80,
      opacity: 0,
      stagger: 0.8,
      ease: 'slow(0.7, 0.7, false)',
    });

    gsap.from(document.querySelector('.two-side'), {
      scrollTrigger: {
        trigger: document.querySelectorAll('.two-side'),
        start: 'top center',
        end: 'center top',
      },
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'slow(0.7, 0.7, false)',
    });

    gsap.from(document.querySelectorAll('.member>.content'), {
      scrollTrigger: {
        trigger: document.querySelectorAll('app-text-scroll'),
        start: 'center center',
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.15,
      ease: 'slow(0.7, 0.7, false)',
    });

  }
}
