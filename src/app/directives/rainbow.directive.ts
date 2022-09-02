import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  /* Ce que je veux manipuler */
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {}
  /* Ce que je veux  faire et suite à quel event */
  @HostListener('keyup') onKeyUp() {
    this.bc = this.getRandomColor();
    this.color = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
