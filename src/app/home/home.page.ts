import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  challenges: string[] = ['Castigo: Bebe un chupito.',
    'Confesión picante: Cuéntanos tu fantasía más oscura.',
    'Beso a aleatorio: Gira la botella, besa ala persona que señale la botella.',
    'Baile atrevido: Haz un baile sensual por 30 segundos.',
    'Verdad a quemarropa: Contesta con honestidad la pregunta que te haga la persona a tu derecha.',
    'Llamada traviesa: Llama a alguien y háblale con voz seductora durante 1 minuto.',
    'Postura del kamasutra: Elige una postura al azar y simula cómo se haría (sin desnudarse ni contacto).',
    'Masaje de 1 minuto: Da un masaje en los hombros o el cuello a la persona a tu izquierda.',
    'Reparte castigo: reparte 3 chupitos a 3 personas distintas',
    'Todos castigados: todos beben un chupito',
    'Reto del hielo: Pasa un cubo de hielo por el cuello ala persona de la derecha hasta que se derrita.',
    'Castigo doble: Bebe dos chupito.',
    'Imitación: Imita alguien de la mesa',
    'chupito sin manos: Intenta tomar un chupito sin usar tus manos no te pueden ayudar.',
    'Duelo de miradas: Mira fijamente a alguien mientras ambos toman un chupito. El primero en reírse o desviar la mirada, toma otro.',
    'Castigo triple: Bebe tres chupito.',
    'Duelo de chupitos: Desafía a alguien a ver quién puede tomar un chupito más rápido.',
    'La estatua humana: Cuando te toque, conviértete en una "estatua" no te puedes mover ni hablar durante 1 minuto',
    'Inventa regla: inventate una regla si alguien no la cumple tiene un castigo que decide el grupo',
    'Club de la comedia: Cuenta un chiste al grupo'
  ]; 
  lastChallenge: string = '';

  spinBottle() {
    let degrees = Math.floor(Math.random() * 360 * 5 + 1);
    document.getElementById('bottle')!.style.transform = `rotate(${degrees}deg)`;

    let challengeElement = document.getElementById('challengeText')!;
    let interval = setInterval(() => {
      let randomChallenge = this.challenges[Math.floor(Math.random() * this.challenges.length)];

      // Asegurarse de que el reto seleccionado no sea el mismo que el anterior
      while (randomChallenge === this.lastChallenge) {
        randomChallenge = this.challenges[Math.floor(Math.random() * this.challenges.length +1)];
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
