import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHomeComponent } from './my-home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: MyHomeComponent,
    children: []
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MyHomeComponent]
})
export class MyHomeModule { }
