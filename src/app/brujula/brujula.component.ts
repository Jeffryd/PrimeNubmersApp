import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brujula',
  templateUrl: './brujula.component.html',
  styleUrls: ['./brujula.component.css']
})
export class BrujulaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let direcciones : string[] = ['North', 'South', 'South', 'East', 'West', 'North', 'East', 'West'];
    //count direcctions with reduce javascript
    console.log( this.getDirections(direcciones) );
  }

  getDirections( directions: string[] ): string[]{
  const countDirections =  directions.reduce( (acumulador, direction) => {
      acumulador[`${direction}`]++;
      return acumulador;
    }, {North: 0, South: 0, East: 0, West: 0} );

  return  this.setDirecctionsResult( countDirections );
  }

  setDirecctionsResult(direcctionsType): string[] {
    let x = direcctionsType['East'] - direcctionsType['West'];
    let y = direcctionsType['North'] - direcctionsType['South'];

    return [ ...this.getFinishDirections(x, 'East', 'West'),
    ...this.getFinishDirections(y, 'North', 'South') ]

  }

  getFinishDirections(count: number, dir1: string, dir2: string){
    return new Array(Math.abs(count)).fill(count > 0 ? dir1 : dir2)
  }

}