import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {IQuote} from "../../data/quotes.interface";
import {QuotesService} from "../../services/quotes.service";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: IQuote[], icon: string};
  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private quoteService: QuotesService,
              public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.quoteGroup = this.navParams.get('quoteGroup');
  }

  onAddToFavorite(quote: IQuote){
    let self = this;
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      subTitle: 'Are you sure?',
      buttons: [
        {
          text: 'Go Ahead!',
          handler: () => {
            debugger;
            console.log('Ok');
            self.quoteService.addQuoteToFavorites(quote);
            alert.dismiss().catch();
            return false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
            return false;
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorite(quote: IQuote){
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: IQuote){
    return this.quoteService.isQuoteFavorite(quote);
  }
}
