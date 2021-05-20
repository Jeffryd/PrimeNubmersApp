import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pascalize-words',
  template: ' dsadf',
  styleUrls: ['./pascalize-words.component.css']
})
export class PascalizeWordsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let oracion = "i like javascript";

    console.log( this.pascalize( oracion ) );
  }

  pascalize( words: string ){
      return words.match(/[a-zA-Z0-9]+/g)
      .map( word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }).join("")
  }

}