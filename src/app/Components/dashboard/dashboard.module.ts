import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListMemorandosComponent } from './list-memorandos/list-memorandos.component';
import { NewMemoComponent } from './new-memo/new-memo.component';
import { SentMemorandosComponent } from './sent-memorandos/sent-memorandos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ListMemorandosComponent,
    NewMemoComponent,
    SentMemorandosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
