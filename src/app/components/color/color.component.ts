import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  bgc = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParametres) => {
      this.defaultColor = mesParametres['defaultColor'];
      this.bgc = this.defaultColor;
    });
    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log('qp : ', qp);
    });
  }
  changeColor(newColor: string) {
    this.bgc = newColor;
  }
}
