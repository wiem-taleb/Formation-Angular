import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bgc = 'red';
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.bgc = this.out;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
    this.element.nativeElement.innerHTML = 'in';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
    this.element.nativeElement.innerHTML = 'out';
  }
}
