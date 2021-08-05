import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListMemorandosComponent } from './list-memorandos/list-memorandos.component';
import { NewMemoComponent } from './new-memo/new-memo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ListMemorandosComponent,
    NewMemoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
