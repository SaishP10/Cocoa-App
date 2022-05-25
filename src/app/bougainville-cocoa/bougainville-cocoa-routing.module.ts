import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BougainvilleCocoaPage } from './bougainville-cocoa.page';

const routes: Routes = [
  {
    path: '',
    component: BougainvilleCocoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BougainvilleCocoaPageRoutingModule {}
