import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PestsPageRoutingModule } from './pests-routing.module';

import { PestsPage } from './pests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PestsPageRoutingModule
  ],
  declarations: [PestsPage]
})
export class PestsPageModule {}
