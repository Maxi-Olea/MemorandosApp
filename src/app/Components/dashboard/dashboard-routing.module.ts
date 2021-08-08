import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMemorandosComponent } from './list-memorandos/list-memorandos.component';
import { NewMemoComponent } from './new-memo/new-memo.component';
import { SentMemorandosComponent } from './sent-memorandos/sent-memorandos.component';

const routes: Routes = [
  { path: '', component: ListMemorandosComponent },
  { path: 'sent', component: SentMemorandosComponent },
  { path: 'newmemo', component: NewMemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
