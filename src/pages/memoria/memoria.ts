import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Pantalla2Page } from '../pantalla2/pantalla2';

/**
 * Generated class for the MemoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memoria',
  templateUrl: 'memoria.html',
})
export class MemoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemoriaPage');
  }

  

  public ir2Pantalla(){
    this.navCtrl.push(Pantalla2Page);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mensaje',
      subTitle: 'Respuesta Correcta',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(Pantalla2Page);
  }

}
