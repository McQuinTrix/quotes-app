import { Component } from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {IQuote} from "../../data/quotes.interface";
import {QuotesService} from "../../services/quotes.service";
import {QuotePage} from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: IQuote[];

  constructor(public quotesService: QuotesService,
              private modalCtrl: ModalController){
  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavQuote();
    this.setBGcolor();
  }

  onView(quote: IQuote){
    const modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((payload)=>{
        this.onRemoveFromFavorite(quote);
    })
  }

  onRemoveFromFavorite(quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavQuote();
  }

  backgroundColor: string = '';
  setBGcolor(){
    debugger;
    if(this.quotesService.getBackgroundState()){
      this.backgroundColor = 'altQuoteBackground';
    }else{
      this.backgroundColor = '';
    }
  }
}
