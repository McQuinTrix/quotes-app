import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Toggle} from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  backgroundState: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: QuotesService) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SettingsPage');
    debugger
    this.backgroundState = this.service.getBackgroundState();
  }

  onToggle($event: Toggle) {
    this.service.setBackgroundState($event.checked);
  }

}
