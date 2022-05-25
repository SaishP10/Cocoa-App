import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BougainvilleCocoaPageRoutingModule } from './bougainville-cocoa-routing.module';

import { BougainvilleCocoaPage } from './bougainville-cocoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BougainvilleCocoaPageRoutingModule
  ],
  declarations: [BougainvilleCocoaPage]
})
export class BougainvilleCocoaPageModule {}
