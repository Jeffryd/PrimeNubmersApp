import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
       let number : number = 11;
        console.log( this.verifyNumeberPrimos(number)  );
  }

   verifyNumeberPrimos(numberToVerify: number): string{
    if( !Number.isInteger(numberToVerify) 
    || (numberToVerify <= 0)  ) return  numberToVerify +  " no es primo";

    let divisores = this.divisoresposibles(numberToVerify).length;

    return divisores === 2 ? this.setmesage(numberToVerify, 'si') : this.setmesage(numberToVerify, 'no')
  }

   setmesage(n: number, msj: string): string{
    return n + ' ' + msj  + ' es primo'
  }

  divisoresposibles(n: number): number[]{
    let values=[];
    const end=Math.floor(Math.sqrt(n));
 
    for (let i=1; i<=end; i++) {
        if (n%i==0) {
            values.push(i);
            if (i*i!=n) {
                values.push(n/i);
            }
        }
    }
    return values.sort((a,b)=>a-b);
}

}