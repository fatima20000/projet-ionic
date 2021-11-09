import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeuillepresencePageRoutingModule } from './feuillepresence-routing.module';

import { FeuillepresencePage } from './feuillepresence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeuillepresencePageRoutingModule
  ],
  declarations: [FeuillepresencePage]
})
export class FeuillepresencePageModule {}
