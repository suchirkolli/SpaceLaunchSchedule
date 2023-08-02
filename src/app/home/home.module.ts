import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {Keyboard} from '@capacitor/keyboard';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  
  providers: [{
    provide: Keyboard,
    useFactory: () => Keyboard, // Use a custom factory function
  },],
})
export class HomePageModule {}
