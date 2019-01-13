import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {IQuote} from "../../data/quotes.interface";
import quote from '../../data/quotes';
import {QuotesPage} from "../quotes/quotes";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quoteCollection: {category: string, quotes: IQuote[], icon: string}[];
  constructor(public navCtrl: NavController){

  }
  ngOnInit(){
    this.quoteCollection = quote;
  }
  quotesPage = QuotesPage;

  onSelect(quoteGroup){
    this.navCtrl.push(this.quotesPage,{quoteGroup:quoteGroup})
  }
}
