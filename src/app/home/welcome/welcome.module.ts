import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: "",
      component: WelcomeComponent,
      children: []
    },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
