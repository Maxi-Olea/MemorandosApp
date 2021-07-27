import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMemorandosComponent } from './list-memorandos/list-memorandos.component';

const routes: Routes = [
  { path: '', component: ListMemorandosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
