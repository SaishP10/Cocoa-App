import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomesPageRoutingModule } from './welcomes-routing.module';

import { WelcomesPage } from './welcomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomesPageRoutingModule
  ],
  declarations: [WelcomesPage]
})
export class WelcomesPageModule {}
