import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PestsPage } from './pests.page';

const routes: Routes = [
  {
    path: '',
    component: PestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PestsPageRoutingModule {}
