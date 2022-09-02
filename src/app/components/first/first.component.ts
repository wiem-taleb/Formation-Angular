import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  isHidden = false;
  buttonMessage = 'hide';
  inputContent = '';
  constructor() {}

  ngOnInit(): void {
    /*    setInterval(() => {
      this.isHidden = !this.isHidden;
    }, 3000); */
  }

  showHide() {
    this.isHidden = !this.isHidden;
    this.buttonMessage = this.buttonMessage == 'hide' ? 'show' : 'hide';
  }
  changeMessage(newValue: string) {
    this.inputContent = newValue;
  }
}
