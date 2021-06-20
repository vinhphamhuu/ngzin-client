import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  declarations: [HomeComponent],
  exports: []
})
export class HomeModule { }
