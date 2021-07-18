import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] =[
    new Quote(1, 'Stocism','Alfred','The greatest fear is the fear for fear', 'vinci', new Date(2021,7,17)),
    new Quote(2, 'Stocism','Bob','The greatest fear is the fear for fear', 'Aurelius', new Date(2021,7,17)),
    new Quote(3, 'Stocism','Alice','The greatest fear is the fear for fear', 'Epictetus', new Date(2021,7,17)),
    new Quote(4, 'Stocism','Job','The greatest fear is the fear for fear', 'Plato', new Date(2021,7,17)),
    new Quote(5, 'Stocism','Mark','The greatest fear is the fear for fear', 'Socrates', new Date(2021,7,17)),
    new Quote(6, 'Stocism','Ray','The greatest fear is the fear for fear', 'Darwin', new Date(2021,7,17)),
    new Quote(7, 'Stocism','Mohammed','The greatest fear is the fear for fear', 'Gorbachev', new Date(2021,7,17)),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
