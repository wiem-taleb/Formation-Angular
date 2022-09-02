import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() paths: string[] = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png'
  ];
  @Input() timer = 1500;
  sliderObservable$: Observable<string>;
  constructor() {
    this.sliderObservable$ = new Observable<string>(
      (observer) => {
        let i = 0;
        setInterval(
          () => {
            if (i === this.paths.length) {
              i = 0;
            }
            observer.next(this.paths[i++]);
          },
          this.timer
        );
      }
    );
  }

  ngOnInit(): void {
  }

}
