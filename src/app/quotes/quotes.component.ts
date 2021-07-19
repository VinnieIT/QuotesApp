import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quote:Quote = new Quote(0,"","","","",0,0,new Date,);
  @Output() increament = new EventEmitter <number>();


  quotes:Quote[] =[
    new Quote(1, 'Stoicism and Life','Alfred','Waste no more time arguing what a good man should be. Be One.', 'Marcus Aurelius',0,0, new Date(2021,7,17)),
    new Quote(2, 'Stoicism and Life','Bob','He who fears death will never do anything worth of a man who is alive.', 'Seneca', 0,0,new Date(2021,7,17)),
    new Quote(3, 'Stoicism and Life','Alice','Luck is what happens when preparation meets opportunity.', 'Epictetus', 0,0,new Date(2021,7,17)),
    new Quote(4, 'Stoicism and Life','Job','How long are you going to wait before you demand the best for yourself?', 'Epictetus', 0,0,new Date(2021,7,17)),
    new Quote(5, 'Stoicism and Life','Mark','Hang on to your youthful enthusiasms — you’ll be able to use them better when you’re older.', 'Seneca',0,0, new Date(2021,7,17)),
    new Quote(6, 'Stoicism and Life','Ray','The happiness of your life depends upon the quality of your thoughts.', 'Marcus Aurelius', 0,0,new Date(2021,7,17)),
    new Quote(7, 'Stoicism and Life','Mohammed','Wealth consists not in having great possessions, but in having few wants.', 'Epictetus',0,0, new Date(2021,7,17)),
  
  ];
  showDetail(index: number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  removeQuote(isDone: any, index:number){
    if (isDone) {
      let toRemove = confirm(`Are you sure you want to delete ${this.quotes[index].topic}?`)
      if (toRemove) {
        this.quotes.splice(index, 1)
        
      }
      
    }

  }
  addVotes (index:number){
    this.quotes[index].upvotes+=1;
  }

  addDisvotes (index:number){
    console.log(this.quotes[index].downvotes+=1);


  }

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedOn = new Date(quote.postedOn)
    this.quotes.push(quote)

  }  






  constructor() { }

  ngOnInit(): void {
  }

}
