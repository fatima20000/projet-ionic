import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';


@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})

@NgModule({
  imports: [
    QRCodeModule
  ],
  declarations: [DepositModalComponent]
})

export class DepositModalComponent {

  public values: string = null;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public Administrateur;
  public Agent;
  public Gestionnaire;
  public contact = {
    name: "ESP",
    email: "nguissanzinginzou@esp.sn",
    tel: "+221 77 820 16 67",
    logo: "assets/imges/logo.jpg",
    dashbord: "assets/imges/logo1.jpg"
  }

  constructor(private modalCtrl: ModalController) {
    this.level = "L";
    this.values = "Sazou";
    this.width = 200;
  }
/* 
  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrWidth(val: number) {
    this.width = val;
  } */

  qrData(val: string) {
    this.values = val;
  }


  dismissModal() {
      this.modalCtrl.dismiss();
  }

}
