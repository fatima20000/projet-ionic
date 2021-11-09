import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../service/users.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-compte',
  templateUrl: 'compte.page.html',
  styleUrls: ['compte.page.scss']
})
export class ComptePage {
  users = [
 
  ];

  constructor(
    private router: Router,
    private service: UsersService,
    private loadingController: LoadingController
    ) {this.loadUsers();}

    async loadUsers(): Promise<void>
    {
      const loading = await this.loadingController.create({
        cssClass: 'app-class',
        message: 'Chargement en cours...'
      });
      await loading.present();
      this.service.getUsers().subscribe(users => {
        loading.dismiss();
        this.users = users;
      }, error => { console.log(error);
      })
    }


  modifier(id: number): void
  {
    this.router.navigateByUrl('tabs/compte/modifier/' +id);
  }

  async remove(id: number): Promise<void>
  {
    const loading = await this.loadingController.create({
      cssClass: 'app-class',
      message: 'Suppression en cours...'
    });

    await loading.present();
    this.service.delete(id).subscribe(result => {
      loading.dismiss();
      this.loadUsers();
    }, error => { console.log(error);
    })
  }

  ionViewDivEnter() {this.loadUsers();}
}
