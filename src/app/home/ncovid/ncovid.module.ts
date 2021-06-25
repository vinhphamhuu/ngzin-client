import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcovidComponent } from './ncovid.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular-highcharts';


const routes: Routes = [
  {
    path: "",
    component: NcovidComponent,
    children: []
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule
  ],
  declarations: [NcovidComponent]
})
export class NcovidModule { }
