import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  spinBottle() {
    let degrees = Math.floor(Math.random() * 360);
    document.getElementById('bottle')!.style.transform = `rotate(${degrees}deg)`;
  }
}
