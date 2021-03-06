import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SallePage } from './salle.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SallePageRoutingModule } from './salle-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SallePageRoutingModule
  ],
  declarations: [SallePage]
})
export class SallePageModule {}
