import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the Pantalla2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pantalla2',
  templateUrl: 'pantalla2.html',
})
export class Pantalla2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pantalla2Page');
  }

  public irMenu(){
    this.navCtrl.push(MenuPage);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mensaje',
      subTitle: 'Respuesta Correcta',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(MenuPage);
  }

}
