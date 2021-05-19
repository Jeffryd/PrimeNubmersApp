import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {

  numbers: number[];

  constructor() { }

  ngOnInit() {
    this.numbers = this.range( 1, 100, 1 );
    console.log( console.log( this.test(15)) )
  }

  range(start: number, stop: number, step: number) : number[] {
    let a = [start] , b = start;
    while( b < stop ){
      b += step;
      a.push(b);
    }
    return a;
  }

  test(n){
    let msg = [];
    for(var i=1;i<=n;i++){
    if (!(i%3)) msg.push('fizz'); 
    if (!(i%5)) msg.push('buzz');
    if ((i%3) == 0 && (i%5) == 0) msg.push('fizzbuzz')
    else( msg.push(i))
}
return msg;

  }

}