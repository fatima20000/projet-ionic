import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path: '',
    component: MenuPage,
    children: [
      {path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {path: 'salle', loadChildren: () => import('../salle/salle.module').then( m => m.SallePageModule)},
      {path: 'reunion', loadChildren: () => import('../reunion/reunion.module').then( m => m.ReunionPageModule)},
      {path: 'employe', loadChildren: () => import('../employe/employe.module').then( m => m.EmployePageModule)},
      {path: 'direction', loadChildren: () => import('../direction/direction.module').then( m => m.DirectionPageModule)},
      {path: 'feuillepresence', loadChildren: () => import('../feuillepresence/feuillepresence.module').then( m => m.FeuillepresencePageModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
