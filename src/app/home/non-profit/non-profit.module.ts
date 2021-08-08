import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NonProfitComponent } from './non-profit.component';
import { NpUserListComponent } from './np-user-list/np-user-list.component';
import { NpUserContentComponent } from './np-user-content/np-user-content.component';
import { NonProfitService } from '../../services/non-profit.service';

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
  declarations: [
    NonProfitComponent,
    NpUserListComponent,
    NpUserContentComponent
  ],
  providers: [
    NonProfitService
  ]
})
export class NoneProfitModule { }
