import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomesPage } from './welcomes.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomesPageRoutingModule {}
