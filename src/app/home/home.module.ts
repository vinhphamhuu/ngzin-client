import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { NCovidService } from '../services/ncovid.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
  ],
  declarations: [HomeComponent],
  exports: [

  ],
  providers: [
    NCovidService
  ]
})
export class HomeModule { }
