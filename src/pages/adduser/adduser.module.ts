import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdduserPage } from './adduser';

@NgModule({
  declarations: [
    AdduserPage,
  ],
  imports: [
    IonicPageModule.forChild(AdduserPage),
  ],
})
export class AdduserPageModule {}
