import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css'],
})
export class NgStyleExampleComponent implements OnInit {
  @Input() color = 'gold';
  @Input() bgc = 'darkred';
  size = '80px';
  constructor() {}

  ngOnInit(): void {}
}
