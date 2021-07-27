import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListMemorandosComponent } from './list-memorandos/list-memorandos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ListMemorandosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
