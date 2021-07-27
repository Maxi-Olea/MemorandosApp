import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/user/login/login.component'
import { DataService } from './Services/data.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', loadChildren: () => import('./Components/user/user.module')
              .then(m => m.UserModule) },
  { path: 'dashboard', component: DashboardComponent,
              loadChildren: () => import('./Components/dashboard/dashboard.module')
              .then(m => m.DashboardModule) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DataService]
})
export class AppRoutingModule { }
