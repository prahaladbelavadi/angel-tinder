import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { IonicModule } from '@ionic/angular';

import { SwipePadPage } from './swipe-pad.page';
import { SwingModule } from 'angular2-swing';

const routes: Routes = [
  {
    path: '',
    component: SwipePadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    SwingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SwipePadPage]
})
export class SwipePadPageModule {}
