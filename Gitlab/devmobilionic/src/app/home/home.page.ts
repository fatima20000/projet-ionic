import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public contact = {
    name: "Ecole Supérieure Polytechnique",
    email: "nguissanzinginzou@esp.sn",
    tel: "+221 77 820 16 67",
    logo: "assets/imges/logo.jpg",
    dashbord: "assets/imges/logo1.jpg"
  }
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal(){

    const modal = await this.modalCtrl.create({
      component: DepositModalComponent
    });

    await modal.present();

  }

}
