import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { AjoutdirectModalComponent } from '../ajoutdirect-modal/ajoutdirect-modal.component';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.page.html',
  styleUrls: ['./direction.page.scss'],
})
export class DirectionPage implements OnInit {

  public balanceInput = new FormControl('',Validators.required);
  public dataDirection;
  public status;
  public errorMessage;
  public cod;
  public desig;
  public valid;
  public endPoints = "/directions/";

  constructor(private httpClient: HttpClient, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  affiche(){

    this.httpClient.get("http://localhost:1337"+this.endPoints).subscribe(data => {

    this.dataDirection=data;
      
    },error => {

      console.log(error);
      
    });
    
  }

  confirmer(id){

    this.endPoints = this.endPoints+id;

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Êtes vous sûr d\'effectuer la suppression?',
      text: "L\'élément sera supprimer pour toujours!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer!',
      confirmButtonColor: '#0275d8',
      cancelButtonColor: '#d9534f',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Effectuer!',
          'Elément supprimé.',
          'success'
        )
        this.httpClient.delete('http://localhost:1337'+this.endPoints)
        .subscribe(
              data => {
                this.status = 'Delete successful';
                window.location.reload();
                
            },
            error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
            
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annuler',
          'Suppression annuler',
          'error'
        )
      }
    })

  }

  downloadD(){

  }

  shareD(){
    
  }

  supprimer(direction){

    let timerInterval
                Swal.fire({
                  title: 'Suppression!',
                  html: 'En cours... <b></b>',
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                      b.tabIndex = Swal.getTimerLeft()
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                    
                  }
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    this.confirmer(direction.id);
                  }
                })

  }

  async modifier(direction){

    console.log(direction.id);

    this.endPoints = this.endPoints+direction.id;
    this.cod = direction.code;
    this.desig = direction.libelle;

     await Swal.fire({
      title: 'Mise à jour',
      html:
        '<ion-card>'
        +'<ion-card-content class="ion-padding">'+'<ion-item>'+'<ion-label position="floating">CODE</ion-label>'+'<ion-input (ionChange)="updateCode($event)" id="swal-input1" name="cod" value="'+this.cod+'">'+'</ion-input>'+'</ion-item>' +
        '<ion-item>'+'<ion-label position="floating">DESIGNATION</ion-label>'+'<ion-input (ionChange)="updateDesig($event)" id="swal-input2" name="desig" value="'+this.desig+'">'+'</ion-input>'+'</ion-item>'+
        '</ion-card-content>'+
        +'</ion-card>',
        focusConfirm: false,
        preConfirm: () => {
          return [
            this.cod = (<HTMLInputElement>document.getElementById("swal-input1")).value,
            this.desig = (<HTMLInputElement>document.getElementById("swal-input2")).value
          ]
        }
    });
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Êtes vous sûr de vouloir effectuer cette mise à jour?',
      text: "la donnée existante sera écrasée!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Effectuer!',
          'Donnée mise à jour.',
          'success'
        )

        this.httpClient.put<any>('http://localhost:1337'+this.endPoints, {code: this.cod, libelle: this.desig }).subscribe(data => {
        
        this.httpClient.get("http://localhost:1337/directions").subscribe(data1 => {

            this.dataDirection=data1;

            this.router.navigateByUrl('/menu/direction');

            },error => {

              console.log(error);
              
            });
    },error => {

      console.log(error);
      
    });
    

      }
    
    });
    
  
  }

  updateCode(ev)
  {

    console.log(ev);

    this.cod= ev.detail.value;
    
    if (ev.detail.value!=null) {
      this.valid=true;  
    }
    if(ev.detail.value===""){
      this.valid=false; 
    }
    
  }

  updateDesig(ev)
  {
    this.desig= ev.detail.value;

    if (ev.detail.value!=null && this.valid) {
      this.balanceInput.setValue(false);  
    }
    if(ev.detail.value===""){
      this.balanceInput = new FormControl('',Validators.required); 
    }

  }


  async modalDirection(direction){
    const modal = await this.modalCtrl.create({
      component: AjoutdirectModalComponent
    });

    await modal.present();

  }

}
