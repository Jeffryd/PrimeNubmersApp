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
    let word = "AABBCA";
    console.log( this.countCharInWord( word ) );
  }

  pascalize( words: string ){
      return words.match(/[a-zA-Z0-9]+/g)
      .map( word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }).join("")
  }

  countCharInWord(word: string){
  let count: number;
  let counts =  word.split('')
  .reduce((prev, curr)=>{
    count = prev[curr] ? (prev[curr]+1) : 1;
    prev[curr] = count;
    return prev
  },{});
  return this.setCountedString(counts);
  }

  setCountedString(data){
    let newstring = [];
    let repeat: number;
    for(let prop in data){
      repeat = data[prop];
      const item = new Array(repeat).fill(`${repeat}${prop}`);
      newstring = [ ...newstring, ...item[0] ]
    }
    return newstring.join('');
  }

/*

    if(count && curr){
      console.log( passChar, curr, count)
    }
    if(passChar === undefined || passChar !== curr){
      console.log('entro')
      passChar = curr;
      count = undefined;
    } 
*/


}


