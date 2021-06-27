import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MeStyle1Component } from './me-style1/me-style1.component';
import { MeStyle2Component } from './me-style2/me-style2.component';
import { MeStyle3Component } from './me-style3/me-style3.component';

const routes: Routes = [
  {
    path: "",
    component: MyProfileComponent,
    children: [
      // {
      //   path: "1",
      //   component: MeStyle1Component
      // },
      // {
      //   path: "2",
      //   component: MeStyle2Component
      // },
      // {
      //   path: "3",
      //   component: MeStyle3Component
      // }
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MyProfileComponent,
    MeStyle1Component
  ],
  exports: [],
  entryComponents: [
    // MeStyle1Component
  ]
})
export class MyProfileModule { }
