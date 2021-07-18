import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quote } from  '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!:Quote;
  @Output() isDone =new EventEmitter<boolean>();

  removeQuote(done:boolean){
    this.isDone.emit(done);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
