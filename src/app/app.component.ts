import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  // numero entre si mismo y entre 1 (entero)
  // 1 primo diveide en 1 en si mismo
  // 2 primo 

  // david.garcial@blitzrocks.com

  // ana.cruz@blitzrocks.com
  
constructor(){

//this.sprint(13)

//this.otramaneraPrimos()

}

sprint(x: number ){

let isPrime = true;

if (x === 1) {
    console.log("1 es un numero primo");
}

else if (x > 1) {

    // verificar en n pasos
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${x} Es un número primo`);
    } else {
        console.log(`${x} No es un número primo`);
    }
}

// numeros negativos verificar
else {
    console.log("numeros negativos no son primos");
}
}


otramaneraPrimos(){
  const elementos = 100;
const primos = [];
let iteraciones = 0;

for(let candidato = 2; candidato <= elementos; candidato++) {
    let primo = true;
    for(let divisor=2; divisor < candidato; divisor++) {
        iteraciones++;
        if(candidato%divisor === 0) {
            primo = !primo;
            break;
        }
    }
    if(primo) primos.push(candidato);
}

console.log('iteraciones: ', iteraciones );
console.log(primos);
}



}
