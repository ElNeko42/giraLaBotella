import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  challenges: string[] = ['Reto 1', 'Reto 2', 'Reto 3', 'Reto 4', 'Reto 5','Reto 6', 'Reto 7', 'Reto 8', 'Reto 9', 'Reto 10','Reto 11', 'Reto 12', 'Reto 13', 'Reto 14', 'Reto 15']; // Puedes añadir más retos
  lastChallenge: string = '';

  spinBottle() {
    let degrees = Math.floor(Math.random() * 360 * 5 + 1);
    document.getElementById('bottle')!.style.transform = `rotate(${degrees}deg)`;

    let challengeElement = document.getElementById('challengeText')!;
    let interval = setInterval(() => {
      let randomChallenge = this.challenges[Math.floor(Math.random() * this.challenges.length)];

      // Asegurarse de que el reto seleccionado no sea el mismo que el anterior
      while (randomChallenge === this.lastChallenge) {
        randomChallenge = this.challenges[Math.floor(Math.random() * this.challenges.length)];
      }

      this.lastChallenge = randomChallenge;
      challengeElement.textContent = randomChallenge;

      // Efecto de tragaperras
      challengeElement.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        challengeElement.style.transform = 'translateY(0)';
      }, 100);
    }, 200);

    let rotationDuration = (degrees / (360 * 5)) * 1000;
    setTimeout(() => {
      clearInterval(interval);
    }, rotationDuration);
  }

}
