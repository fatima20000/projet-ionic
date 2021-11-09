import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeuillepresencePage } from './feuillepresence.page';

const routes: Routes = [
  {
    path: '',
    component: FeuillepresencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeuillepresencePageRoutingModule {}
