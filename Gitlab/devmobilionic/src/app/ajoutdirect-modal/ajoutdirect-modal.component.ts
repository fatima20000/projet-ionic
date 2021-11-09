import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-ajoutdirect-modal',
  templateUrl: './ajoutdirect-modal.component.html',
  styleUrls: ['./ajoutdirect-modal.component.scss']
})

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot() 
  ]
})

export class AjoutdirectModalComponent {

  public balanceInput = new FormControl('',Validators.required);
  public cod;
  public desig;
  public postId;
  public dataDirection;
  public valid;
  public endPoints = "/directions/";
  

  constructor(private modalCtrl: ModalController, private httpClient: HttpClient, private router: Router, public navCtrl: NavController) { }

  
  ngOnInit() {
  }
  
  dismissModal() {
      this.modalCtrl.dismiss();
  }

  newCode(ev)
  {

    this.cod= ev.detail.value;
    
    if (ev.detail.value!=null) {
      this.valid=true;  
    }
    if(ev.detail.value===""){
      this.valid=false; 
    }
    
  }

  newDesig(ev)
  {
    this.desig= ev.detail.value;

    if (ev.detail.value!=null && this.valid) {
      this.balanceInput.setValue(false);  
    }
    if(ev.detail.value===""){
      this.balanceInput = new FormControl('',Validators.required); 
    }

  }

  addDirection(){

    this.httpClient.post<any>('http://localhost:1337'+this.endPoints, {code: this.cod, libelle: this.desig }).subscribe(data => {
        
    this.postId = data.id;

    this.router.navigateByUrl('/menu/direction');
        
        this.httpClient.get("http://localhost:1337/directions").subscribe(data1 => {

            this.dataDirection=data1;

            this.dismissModal();

            this.router.navigateByUrl('/menu/direction');

            },error => {

              console.log(error);
              
            });
    },error => {

      console.log(error);
      
    });
    
  }

}
