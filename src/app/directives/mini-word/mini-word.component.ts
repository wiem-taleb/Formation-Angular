import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent implements OnInit {
  color = 'red';
  font = 'garamond';
  size = 50;
  align = 'left';
  constructor() {}

  ngOnInit(): void {}

  aligner(align: string) {
    this.align = align;
  }
}
