import {IQuote} from "../data/quotes.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class QuotesService{
  private favoriteQuotes: IQuote[] = [];
  backgroundState: boolean = false;
  constructor() {
    console.warn('Hello Singleton Provider');
  }

  addQuoteToFavorites(quote: IQuote){
    this.favoriteQuotes.push(quote);
    debugger;
  }

  removeQuoteFromFavorites(quote: IQuote){
    const position = this.favoriteQuotes.findIndex((quoteEl: IQuote)=>{
      return quoteEl.id === quote.id;
    })
    this.favoriteQuotes.splice(position,1);
  }

  getFavQuote(){
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote:IQuote){
    return this.favoriteQuotes.find((quoteEl:IQuote )=>{
      return quoteEl.id == quote.id;
    })
  }

  setBackgroundState(currentState:boolean){
    this.backgroundState = currentState;
  }

  getBackgroundState(){
    return this.backgroundState;
  }
}
