import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NonProfitComponent } from './non-profit.component';


const routes: Routes = [
  {
    path: "",
    component: NonProfitComponent,
    children: []
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NonProfitComponent]
})
export class NoneProfitModule { }
