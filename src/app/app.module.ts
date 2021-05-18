import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PrimosComponent } from './primos/primos.component';
import { BrujulaComponent } from './brujula/brujula.component';
import { PascalizeWordsComponent } from './pascalize-words/pascalize-words.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PrimosComponent, BrujulaComponent, PascalizeWordsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
