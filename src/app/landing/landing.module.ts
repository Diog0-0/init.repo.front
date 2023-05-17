import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LandingPage } from './landing.page';

import { LandingPageRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandingPageRoutingModule],
  declarations: [LandingPage],
})
export class LandingPageModule {}
